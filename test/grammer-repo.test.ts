// @ts-nocheck
import { cwdRequireCDS } from "cds-internal-tool";
import { createRepositoryParser } from "../src/extension/repo/grammar";


describe("Repository Grammar Test Suite", () => {

  const cds = cwdRequireCDS()

  const model = cds.reflect(cds.parse.cdl('entity Demo {Name:String(255);age:Integer64;active:Boolean; }'))
  const demoEntityDef = model.definitions.Demo
  const parse = createRepositoryParser(demoEntityDef)

  it('should support parse simple method', () => {
    for (const methodName of ['findByName', 'findByNameIs', 'findByNameEquals']) {
      const query = parse(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo' }))
    }
  });

  it('should support parse multi field', () => {
    for (const methodName of ['findByNameAndAge', 'findByNameIsAndAgeIs', 'findByNameEqualsAndAgeEquals']) {
      const query = parse(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', age: 12 }))
    }
  });

  it('should support parse or keyword', () => {
    for (const methodName of ['findByNameOrAge', 'findByNameIsOrAgeIs', 'findByNameEqualsOrAgeEquals']) {
      const query = parse(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', or: { age: 12 } }))
    }
  });

  it('should support find one', () => {
    expect(parse('findOneByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.one.from('Demo').where({ Name: 'Theo' }))
  });


  it('should support find top', () => {
    expect(parse('findTop5ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5))
  });

  it('should support find top skip', () => {
    expect(parse('findTop5Skip20ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5, 20))
  });

  it('should support like operator', () => {
    for (const methodName of ['findByNameLike']) {
      const query = parse(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: { like: 'Theo' } }))
    }
  });

  it('should support other operations', () => {
    const query = parse('deleteByName')("Theo")
    expect(query).toStrictEqual(cds.ql.DELETE.from('Demo').where({ Name: 'Theo' }))
  });

  it('should support literal fixed value', () => {
    expect(parse("findByActiveIsTrue")()).toStrictEqual(cds.ql.SELECT.from("Demo").where({ active: true }))
    expect(parse("findByActiveIsFalse")()).toStrictEqual(cds.ql.SELECT.from("Demo").where({ active: false }))
    expect(parse("findByActiveIsNull")()).toStrictEqual(cds.ql.SELECT.from("Demo").where({ active: null }))
  });

  it('should support raise error', () => {
    expect(() => parse('reuse-people-q-name')).toThrow("Syntax Error: ")
  });

  it('should raise error when not have column', () => {
    expect(() => parse('findByHeight')).toThrow(`the field 'Height' is not in entity Demo`)
  });



});
