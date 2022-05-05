using {cuid} from '@sap/cds/common';
using {People} from '../db/db';


@path : '/hyper'
@impl : './impl/DemoHyperServiceImpl.js'
service DemoHyperService {

  entity Human : cuid {
    Name : String(255);
    Age  : Integer;
  }

  @impl : './impl/PeopleEntityHandler.js'
  entity Peoples as projection on People;

}
