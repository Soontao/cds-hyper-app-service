# CDS Hyper Application Service

> hyper service implementation layer for CAP nodejs runtime

[![npm](https://img.shields.io/npm/v/cds-hyper-app-service)](https://www.npmjs.com/package/cds-hyper-app-service)
![license](https://img.shields.io/npm/l/cds-hyper-app-service)
![npm type definitions](https://img.shields.io/npm/types/cds-hyper-app-service)
[![codecov](https://codecov.io/gh/Soontao/cds-hyper-app-service/branch/main/graph/badge.svg?token=Q2YdgKmU2r)](https://codecov.io/gh/Soontao/cds-hyper-app-service)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Soontao_cds-hyper-app-service&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Soontao_cds-hyper-app-service)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Soontao_cds-hyper-app-service&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Soontao_cds-hyper-app-service)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Soontao_cds-hyper-app-service&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Soontao_cds-hyper-app-service)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Soontao_cds-hyper-app-service&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Soontao_cds-hyper-app-service)

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
        "exts": ["impl", "repo"] // default value, developer could overwrite this config
      }
    }
  }
}
```

## Built-in Extensions

- [Hyper Implementation](./src/extension/impl/README.md) - enhanced `@impl` annotation for entity/handler level
- [Hyper Repository](./src//extension/repo/README.md) - repository implementation like spring repository but applied to CAP nodejs runtime

## Features

- [x] `ApplicationServiceExt` concept
  - [x] optional `beforeInit`/`afterInit` method
  - [x] support options for `exts` node
  - [ ] more context data
  - [ ] documentation/example

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)
