# CDS Hyper Application Service

> hyper service implementation layer for CAP nodejs runtime

[![npm](https://img.shields.io/npm/v/cds-hyper-app-service)](https://www.npmjs.com/package/cds-hyper-app-service)
![license](https://img.shields.io/npm/l/cds-hyper-app-service)
![npm type definitions](https://img.shields.io/npm/types/cds-hyper-app-service)
[![codecov](https://codecov.io/gh/Soontao/cds-hyper-app-service/branch/main/graph/badge.svg?token=Q2YdgKmU2r)](https://codecov.io/gh/Soontao/cds-hyper-app-service)

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
        "exts": [] // add extensions here
      }
    }
  }
}
```

## Built-in Extensions

- [Hyper Impl](./src/extension/impl/) - enhanced `@impl` annotation for entity/handler level

## Features

- [x] `ApplicationServiceExt` concept
  - [x] optional `beforeInit`/`afterInit` method
  - [ ] more context data
  - [ ] documentation/example

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)
