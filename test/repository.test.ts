// @ts-nocheck
import { cwdRequireCDS, setupTest } from "cds-internal-tool";
import HyperApplicationService from "../src";

describe("Fundamental Test Suite", () => {

  setupTest(__dirname, "./app");
  const cds = cwdRequireCDS()

  it('should support connect to a service and create a repository', async () => {

    const srv = await cds.connect.to('DemoService') as HyperApplicationService;
    const AnimalDef = srv.entities['Animal'];

    const repo = srv.getRepository<{ ID: string, Name: string, Age: number }>(AnimalDef)

    const inst = await repo.create({ Name: "Cat Meow", Age: 1 })
    expect(inst).toMatchObject({ Name: "Cat Meow", Age: 1 })
    expect(inst.ID).not.toBeUndefined()

    const inst2 = await repo.findOne({ ID: inst.ID })
    expect(inst2).toMatchObject(inst)

    const inst3 = await repo.findOneByName('Cat Meow')
    expect(inst3).toMatchObject(inst)

    const [inst4] = await repo.find({ Age: 1 })
    expect(inst4).toMatchObject(inst)
    const affectedRows = await repo.update({ Name: "Cat Updated" }, inst.ID)
    expect(affectedRows).toBe(1)

    const result = await repo.remove({ ID: inst.ID })
    expect(result).toBe(1)
  });


});
