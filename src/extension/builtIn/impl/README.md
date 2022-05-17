# Hyper Impl Extension

> built-in hyper impl extension, support annotate `@impl` at service/entity/event level

## Get Started

> install dependency

```bash
npm i -S cds-hyper-app-service
```

> overwrite the `app-service` implementation

```json5
{
  "cds": {
    "requires": {
      "app-service": {
        "impl": "cds-hyper-app-service",
        "exts": ["impl"]
      }
    }
  }
}
```

## Extension - Hyper Impl

### Option 1 - Service Handler

> define a cds service

```groovy
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
module.exports = class DemoServiceImpl extends HyperApplicationService {
  /**
   * 
   * @param {Array} data 
   * @param {import("cds-internal-tool").Request} req
   */
  // defined hook/event/entity by function name
  // with parameter name based injection
  // == `srv.before('CREATE', 'Human', async (data, req) => { ... })`
  async beforeCreateForHuman(data, req) {
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

## Benefits of `cds-hyper-app-service`

### Efficiency Development & Better Test

Register the handler with declarative approach so that we no longer need the `srv.on` anymore, besides developers don't need write test cases for the registration code lines.

In another hand, developer could test the handler **much more efficiency** because the handlers will be much more like a pure function, so the input/output could be test easier.

### Entity Focused Handlers

With `HyperEntityHandler`, developer could create entity oriented handlers and re-use them in different `ApplicationService`, because in CAP development, projection of single entity in many different services is really common.

Additionally, it support `sub-class` and `extending`, so developer could re-use logics for `draft-enabled` and `normal` odata services.

### Parameter Injection

Popular parameter injection, with some type re-format, make CAP development much more flexible

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
  - [ ] warning if with entity name
- [x] framework `cds.requires.impl` support
  - [x] markdown doc update
- [x] parameter injection
  - [ ] rest arguments
  - [ ] documentation for `data` in different hooks
  - [x] behavior change for `each` parameter
  - [ ] optional to verify handler parameters are injectable (runtime or startup)
  - [ ] `cds.Service` injection
  - [ ] `HyperEntityHandler` injection
  - [ ] documentation
- [x] handler name parser
  - [x] `on/before/after` hooks
  - [x] multi hooks
  - [x] CRUD events
  - [x] DRAFT events
  - [x] single entity
  - [x] optional entity
  - [x] bound/unbound action/function support
  - [ ] case in-sensitive action match
  - [ ] order
  - [ ] support messaging event name
- [ ] simple DAO interface like JPA
  - [ ] inject by name
- [ ] AOP programming for with proxy ?
- [ ] duplicated handler check
