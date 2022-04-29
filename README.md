# CDS Hyper Impl

> hyper service implementation layer for CAP nodejs runtime

[![npm](https://img.shields.io/npm/v/cds-hyper-impl)](https://www.npmjs.com/package/cds-hyper-impl)
![license](https://img.shields.io/npm/l/cds-hyper-impl)
![npm type definitions](https://img.shields.io/npm/types/cds-hyper-impl)
[![codecov](https://codecov.io/gh/Soontao/cds-hyper-impl/branch/main/graph/badge.svg?token=upomv9gmft)](https://codecov.io/gh/Soontao/cds-hyper-impl)

## Get Started

```bash
npm i -S cds-hyper-impl
```

```groovy
using {cuid} from '@sap/cds/common';

@path : '/hyper'
@impl : './impl/DemoHyperServiceImpl.js'
service DemoHyperService {

  entity Human : cuid {
    Name : String(255);
    Age  : Integer;
  }

}
```

```js
const { HyperApplicationService } = require("cds-hyper-impl")

module.exports = class DemoHyperServiceImpl extends HyperApplicationService {
  /**
   * 
   * @param {Array} data 
   * @param {import("cds-internal-tool").Request} req
   */
  // defined hook/event/entity by function name
  // with parameter name based injection
  async beforeCreateHuman(data, req) {
    for (const item of data) {
      if (item.Name.length > 10) {
        return req.reject(400, 'human name length should not exceed 10 chars')
      }
    }
  }
}
```

## Features

- [x] HyperApplicationService
  - [ ] combine with HyperEntityHandler
  - [ ] sub-class methods support
  - [ ] with namespace
- [x] HyperEntityHandler
  - [ ] test with re-used entity handler
  - [ ] sub-class methods support
- [x] HyperHandler
  - [ ] bound/unbound action/function support
- [x] parameter injection
  - [ ] rest arguments
  - [ ] documentation for `data` in different hooks
  - [ ] optional to verify handler parameters are injectable (runtime or startup)
- [x] handler name parser
  - [x] `on/before/after` hooks
  - [x] multi hooks
  - [x] CRUD events
  - [ ] DRAFT events
  - [x] single entity
  - [ ] optional entity
  - [ ] multi entities
- [ ] namespace support

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)
