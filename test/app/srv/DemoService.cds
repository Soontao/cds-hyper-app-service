using {cuid} from '@sap/cds/common';

service DemoService {

  @impl.on.create : './deep/onAnimalCreate.js'
  entity Animal : cuid {
    Name : String(255);
    Age  : Integer;
  }

  // @impl : './0001.js'
  entity People : cuid {
    Name : String(255);
    Age  : Integer;
  }


  @impl : {
    before : {create : './impl/book/beforeBookCreate.js'},
    after  : {read : './impl/book/afterBookRead.js'}
  }
  entity Book : cuid {
    Name  : String(255);
    Price : Decimal;
  }


}
