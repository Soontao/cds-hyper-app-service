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

});
