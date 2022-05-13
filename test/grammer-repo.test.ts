// @ts-nocheck
import { cwdRequireCDS } from "cds-internal-tool";
import { createRepositoryParser } from "../src/extension/repo/grammar";


describe("Repository Grammar Test Suite", () => {

  const cds = cwdRequireCDS()

  it('should support parse simple method', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    for (const methodName of ['findByName', 'findByNameIs', 'findByNameEquals']) {
      const query = parser(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo' }))
    }
  });

  it('should support parse multi field', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    for (const methodName of ['findByNameAndAge', 'findByNameIsAndAgeIs', 'findByNameEqualsAndAgeEquals']) {
      const query = parser(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', Age: 12 }))
    }
  });

  it('should support parse or keyword', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    for (const methodName of ['findByNameOrAge', 'findByNameIsOrAgeIs', 'findByNameEqualsOrAgeEquals']) {
      const query = parser(methodName)('Theo', 12)
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: 'Theo', or: { Age: 12 } }))
    }
  });

  it('should support find one', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    expect(parser('findOneByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.one.from('Demo').where({ Name: 'Theo' }))

  });


  it('should support find top', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    expect(parser('findTop5ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5))
  });

  it('should support find top skip', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    expect(parser('findTop5Skip20ByName')('Theo'))
      .toStrictEqual(cds.ql.SELECT.from('Demo').where({ Name: 'Theo' }).limit(5, 20))
  });

  it('should support like operator', () => {
    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })
    for (const methodName of ['findByNameLike']) {
      const query = parser(methodName)('Theo')
      expect(query).toStrictEqual(cds.ql.SELECT('Demo').where({ Name: { like: 'Theo' } }))
    }
  });

  it('should support other operations', () => {

    const parser = createRepositoryParser({ name: "Demo", kind: "entity" })

    const query = parser('deleteByName')("Theo")
    expect(query).toStrictEqual(cds.ql.DELETE.from('Demo').where({ Name: 'Theo' }))

  });

});
