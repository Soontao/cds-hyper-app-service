// @ts-nocheck
import { cwdRequireCDS, fuzzy, setupTest } from "cds-internal-tool";
import { PageExample } from "../src/extension/builtIn/repo/PageExample";
import { isRepository } from "../src/utils";
import DemoHyperServiceImpl from "./app/srv/impl/DemoHyperServiceImpl";

describe("Fundamental Test Suite", () => {

  setupTest(__dirname, "./app");
  const cds = cwdRequireCDS()
  const AnimalRepository = require("./app/srv/repos/AnimalRepository")

  it('should support connect to a service and create a repository', async () => {

    const srv = await cds.connect.to('DemoHyperService') as DemoHyperServiceImpl;

    const repo = srv.demoServiceAnimalRepository

    expect(repo).toBeInstanceOf(AnimalRepository)

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

  it('should support get repository from service', async () => {
    const srv = await cds.connect.to('DemoHyperService') as DemoHyperServiceImpl;
    const repo = srv.getRepository(fuzzy.findEntity("demoServiceAnimal"))
    expect(isRepository(repo)).toBeTruthy()
  });

});
