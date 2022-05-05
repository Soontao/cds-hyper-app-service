# CDS Hyper Impl

> hyper service implementation layer for CAP nodejs runtime

[![npm](https://img.shields.io/npm/v/cds-hyper-impl)](https://www.npmjs.com/package/cds-hyper-impl)
![license](https://img.shields.io/npm/l/cds-hyper-impl)
![npm type definitions](https://img.shields.io/npm/types/cds-hyper-impl)
[![codecov](https://codecov.io/gh/Soontao/cds-hyper-impl/branch/main/graph/badge.svg?token=upomv9gmft)](https://codecov.io/gh/Soontao/cds-hyper-impl)

## Get Started

> install dependency

```bash
npm i -S cds-hyper-impl
```

> overwrite the `app-service` implementation

```json
{
  "cds": {
    "requires": {
      "app-service": {
        "impl": "cds-hyper-impl"
      }
    }
  }
}
```

### Option 1 - Service Handler

> define a cds service

```groovy
using {cuid} from '@sap/cds/common';

@path : '/hyper'
@impl : './impl/DemoServiceImpl.js'
service DemoService {

  entity Human : cuid {
    Name : String(255);
    Age  : Integer;
  }

}
```

> impl it

```js
const { HyperApplicationService } = require("cds-hyper-impl")

module.exports = class DemoServiceImpl extends HyperApplicationService {
  /**
   * 
   * @param {Array} data 
   * @param {import("cds-internal-tool").Request} req
   */
  // defined hook/event/entity by function name
  // with parameter name based injection
  // == `srv.before('CREATE', 'Human', async (data, req) => { ... })`
  async beforeCreateHuman(data, req) {
    for (const item of data) {
      if (item.Name.length > 10) {
        return req.reject(400, 'human name length should not exceed 10 chars')
      }
    }
  }
}
```

### Option 2 - Entity Handler


> define service with entity handler

```groovy
service DemoService {

  @impl : './impl/PeopleEntityHandler.js'
  entity Peoples as projection on People;

}

```

> impl entity handler

```js
const { Request, EventContext, DatabaseService, EntityDefinition, ApplicationService } = require("cds-internal-tool")
const { HyperEntityHandler } = require("cds-hyper-impl")

module.exports = class PeopleEntityHandlers extends HyperEntityHandler {


  /**
   * 
   * @param {Request} req 
   * @param {EventContext} context 
   * @param {DatabaseService} db 
   * @param {EntityDefinition} entity
   * @param {ApplicationService} service
   * @param {Array} data
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   */
  async beforeCreate(req, context, db, entity, service, data, request, response) {
    for (const item of data) {
      if (item.Name.length <= 10) {
        return req.reject(400, "length people name is not enough")
      }
    }
  }


}

```

### Option 3 - Single Event Handler

> define the impl location

```groovy
service DemoService {
  @impl : {
    before : {create : './impl/book/beforeBookCreate.js'},
  }
  entity Book : cuid {
    Name  : String(255);
    Price : Decimal;
  }

}
```

> impl in single module which export a function

```js
/**
 * 
 * @param {import("cds-internal-tool").Request} req 
 * @param {Array} data
 */
module.exports = function beforeBookCreate(req, data) {
  for (const item of data) {
    if (item.Name.length <= 10) {
      return req.reject("length book name is not enough")
    }
  }
}
```

## Why we need `cds-hyper-impl`

Register the handler with declarative approach so that we no longer need the `srv.on` anymore, besides developers don't need write test cases for the registration code lines.

in another hand, developer could test the handler most efficiency because the handlers will be much more like a pure function, so the input/output could be test easier.

## Features

- [x] HyperApplicationService
  - [x] combine with HyperEntityHandler
  - [x] dynamic transactional `this`
  - [ ] sub-class methods support
  - [ ] with namespace
- [x] HyperEntityHandler
  - [ ] test with re-used entity handler (for different projection)
  - [ ] sub-class methods support
  - [ ] raw object implementation
- [x] HyperHandler
  - [ ] bound/unbound action/function support
  - [ ] warning if with entity name
- [x] framework `cds.requires.impl` support
  - [x] markdown doc update
- [x] parameter injection
  - [ ] rest arguments
  - [ ] documentation for `data` in different hooks
  - [ ] behavior change for `each` parameter
  - [ ] optional to verify handler parameters are injectable (runtime or startup)
  - [ ] `cds.Service` injection
  - [ ] documentation
- [x] handler name parser
  - [x] `on/before/after` hooks
  - [x] multi hooks
  - [x] CRUD events
  - [ ] DRAFT events
  - [x] single entity
  - [ ] optional entity
  - [ ] multi entities
  - [ ] order
- [ ] simple DAO interface like JPA
  - [ ] inject by name
- [ ] duplicated handler check

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)
