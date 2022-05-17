// @ts-nocheck
import { cwdRequireCDS, setupTest } from "cds-internal-tool";
import HyperApplicationService from "../src";
import { PageExample } from "../src/extension/repo/PageExample";

describe("Fundamental Test Suite", () => {

  setupTest(__dirname, "./app");
  const cds = cwdRequireCDS()
  interface Animal { ID: string, Name: string, Age: number }

  it('should support connect to a service and create a repository', async () => {

    const srv = await cds.connect.to('DemoService') as HyperApplicationService;
    const AnimalDef = srv.entities['Animal'];

    const repo = srv.getRepository<Animal>(AnimalDef)

    const inst = await repo.create({ Name: "Cat Meow", Age: 1 })
    await repo.create({ Name: "Dog Wow", Age: 2 })
    await repo.create({ Name: "Bird Ji", Age: 2 })
    
    expect(inst).toMatchObject({ Name: "Cat Meow", Age: 1 })
    expect(inst.ID).not.toBeUndefined()

    const inst2 = await repo.findOne({ ID: inst.ID })
    expect(inst2).toEqual(inst)

    const inst3 = await repo.findOneByName('Cat Meow')
    expect(inst3).toEqual(inst)

    const [inst4] = await repo.find({ Age: 1 })
    expect(inst4).toEqual(inst)

    const exampleResults = await repo.find(new PageExample({ Age: 1 }, { rows: 1 }))
    expect(exampleResults).toHaveLength(1)
    expect(exampleResults[0]).toEqual(inst)

    const affectedRows = await repo.update({ Name: "Cat Updated" }, inst.ID)
    expect(affectedRows).toBe(1)

    const result = await repo.remove({ ID: inst.ID })
    expect(result).toBe(1)
  });


});
