using {cuid} from '@sap/cds/common';
using {People} from '../db/db';


service DemoService {

  @impl.on.create : './deep/onAnimalCreate.js'
  entity Animal : cuid {
    Name : String(255);
    Age  : Integer;
  }

  @impl : './impl/PeopleEntityHandler.js'
  entity Peoples as projection on People;


  @impl : {
    before : {create : './impl/book/beforeBookCreate.js'},
    after  : {read : './impl/book/afterBookRead.js'}
  }
  entity Book : cuid {
    Name  : String(255);
    Price : Decimal;
  }


}
