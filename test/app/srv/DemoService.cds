using {cuid} from '@sap/cds/common';

@assert.unique : {unique_name : [Name]}
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


  // @impl : {
  //   before : {create : './impl/animal/beforeBookCreate.js'},
  //   on     : {delete : './impl/animal/onBookDelete.js'}
  // }
  entity Book : cuid {
    Name  : String(255);
    Price : Decimal;
  }


}
