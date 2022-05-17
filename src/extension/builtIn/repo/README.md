# Repository Extension

> support `Repository` interface for CAP runtime


## Get Started

```js
const { extensions: { repo: { BaseRepository } } } = require("cds-hyper-app-service");
/**
 * @typedef {{ID:string,Name:string,Age:number}} Animal
 */

/**
 * @extends {BaseRepository<Animal>}
 */
class AnimalRepository extends BaseRepository {
  /**
   * find one animal by name
   * 
   * @param {string} name
   * @returns {Promise<Animal|null>}
   */
  findOneByName(name) { /** processed by framework */ }
}

module.exports = AnimalRepository
```

```groovy
using {cuid} from '@sap/cds/common';

service DemoService {
  @cds.hyper.repo : './repos/AnimalRepository.js'
  entity Animal : cuid {
    Name : String(255);
    Age  : Integer;
  }
}
```

```ts
const repo = srv.getRepository<AnimalRepository>(AnimalDef)
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
```

## Features


- [ ] repository interface
  - [ ] `@repo` annotation
- [x] inject repo into service
  - [ ] entity handler injection
- [x] error for method
- [x] find
  - [x] find by
  - [x] find by multi fields
  - [x] find by and/or operator 
  - [x] find by field ignore case-sensitive
  - [x] is (not) true/false/null
  - [ ] cache metadata
  - [ ] multi-tenancy aware
- [x] simple DAO operations
  - [x] create
  - [x] update
  - [x] remove
