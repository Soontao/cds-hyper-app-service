// @ts-nocheck
import { cwdRequireCDS } from "cds-internal-tool";
import { isEmptyFunction } from "../src/extension/builtIn/repo";
import { createRepositoryParser } from "../src/extension/builtIn/repo/grammar";


describe("Repository Grammar Test Suite", () => {

  const cds = cwdRequireCDS()

  const { SELECT, UPDATE, DELETE } = cds.ql

  const model = cds.reflect(cds.parse.cdl('entity Demo {Name:String(255);age:Integer64;active:Boolean; }'))
  const demoEntityDef = model.definitions.Demo
  const parse = createRepositoryParser(demoEntityDef)

  it('should support parse simple method', () => {
    for (const methodName of ['findByName', 'findByNameEquals']) {
      const query = parse(methodName)('Theo')
      expect(query).toMatchSnapshot()
    }
  });

  it('should support parse multi field', () => {
    for (const methodName of ['findByNameAndAge', 'findByNameEqualsAndAgeEquals']) {
      const query = parse(methodName)('Theo', 12)
      expect(query).toMatchSnapshot()
    }
  });

  it('should support parse or keyword', () => {
    for (const methodName of ['findByNameOrAge', 'findByNameEqualsOrAgeEquals']) {
      const query = parse(methodName)('Theo', 12)
      expect(query).toMatchSnapshot()
    }
  });

  it('should support find one', () => {
    expect(parse('findOneByName')('Theo'))
      .toMatchSnapshot()
  });


  it('should support find one not equals', () => {
    expect(parse('findOneByNameNotEquals')('Theo'))
      .toMatchSnapshot()
  });

  it('should support find top', () => {
    expect(parse('findTop5ByName')('Theo'))
      .toMatchSnapshot()
  });

  it('should support find top skip', () => {
    expect(parse('findTop5Skip20ByName')('Theo'))
      .toMatchSnapshot()
  });

  it('should support like operator', () => {
    for (const methodName of ['findByNameLike']) {
      const query = parse(methodName)('Theo')
      expect(query).toMatchSnapshot()
    }
  });

  it('should support other operations', () => {
    const query = parse('deleteByName')("Theo")
    expect(query).toMatchSnapshot()
  });

  it('should support literal fixed value', () => {
    expect(parse("findByActiveEqualsTrue")()).toStrictEqual(SELECT.from("Demo").where({ active: true }))
    expect(parse("findByActiveEqualsFalse")()).toStrictEqual(SELECT.from("Demo").where({ active: false }))
    expect(parse("findByActiveEqualsNull")()).toStrictEqual(SELECT.from("Demo").where({ active: null }))
  });

  it('should support literal fixed value (not)', () => {
    expect(parse("findByActiveNotEqualsTrue")()).toStrictEqual(SELECT.from("Demo").where({ active: { ['!=']: true } }))
    expect(parse("findByActiveNotEqualsFalse")()).toStrictEqual(SELECT.from("Demo").where({ active: { ['!=']: false } }))
    expect(parse("findByActiveNotEqualsNull")()).toStrictEqual(SELECT.from("Demo").where({ active: { ['!=']: null } }))
  });

  it('should support is null', () => {
    expect(parse("findByActiveIsNull")()).toStrictEqual(SELECT.from("Demo").where`active is null`)
    expect(parse("findByActiveIsNotNull")()).toStrictEqual(SELECT.from("Demo").where`active is not null`)
  });


  it('should support "update" method', () => {
    expect(parse("updateByNameAge")({ active: true }, 'Theo', 19))
      .toStrictEqual(UPDATE.entity("Demo").set({ active: true }).where({ Name: 'Theo', age: 19 }))
  });


  it('should support raise error', () => {
    expect(() => parse('reuse-people-q-name')).toThrow("Syntax Error: ")
  });

  it('should raise error when not have column', () => {
    expect(() => parse('findByHeight')).toThrow(`the field 'Height' is not in entity 'Demo'`)
  });



  it('should support check function is empty or not', () => {
    function a() { }
    async function aa(params) { }
    async function aac(params) {
      // TODO: 
      // left empty for auto proxy
    }
    const b = () => { }
    const ba = async () => { }
    const bac = async () => {
      // left empty for auto proxy
    }

    const ci = new class {
      async cam() {
        // TODO: update later
      }
      cm() {
        // with comments
      }
      async cb(a, b) {
        return a + b
      }
    }

    for (const f of [a, aa, aac, b, ba, bac, ci.cam, ci.cm]) {
      expect(isEmptyFunction(f)).toBeTruthy()
    }

    for (const f of [ci.cb]) {
      expect(isEmptyFunction(f)).toBeFalsy()
    }

  });



});
