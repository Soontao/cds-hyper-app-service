// @ts-nocheck
import { cwdRequireCDS } from "cds-internal-tool";
import { createRepositoryParser } from "../src/extension/repo/grammar";


describe("Repository Grammar Test Suite", () => {

  const cds = cwdRequireCDS()

  const model = cds.reflect(cds.parse.cdl('entity Demo {Name:String(255);age:Integer64; }'))
  const demoEntityDef = model.definitions.Demo
  const parser = createRepositoryParser(demoEntityDef)

  it('should support parse simple method', () => {
    for (const methodName of ['findByName', 'findByNameIs', 'findByNameEquals']) {
      const query = parser(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo' }))
    }
  });

  it('should support parse multi field', () => {
    for (const methodName of ['findByNameAndAge', 'findByNameIsAndAgeIs', 'findByNameEqualsAndAgeEquals']) {
      const query = parser(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', age: 12 }))
    }
  });

  it('should support parse or keyword', () => {
    for (const methodName of ['findByNameOrAge', 'findByNameIsOrAgeIs', 'findByNameEqualsOrAgeEquals']) {
      const query = parser(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', or: { age: 12 } }))
    }
  });

  it('should support find one', () => {
    expect(parser('findOneByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.one.from('Demo').where({ Name: 'Theo' }))

  });


  it('should support find top', () => {
    expect(parser('findTop5ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5))
  });

  it('should support find top skip', () => {
    expect(parser('findTop5Skip20ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5, 20))
  });

  it('should support like operator', () => {
    for (const methodName of ['findByNameLike']) {
      const query = parser(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: { like: 'Theo' } }))
    }
  });

  it('should support other operations', () => {
    const query = parser('deleteByName')("Theo")
    expect(query).toStrictEqual(cds.ql.DELETE.from('Demo').where({ Name: 'Theo' }))

  });

  it('should support raise error', () => {
    expect(() => parser('reuse-people-q-name')).toThrow("Syntax Error: ")
  });

});
