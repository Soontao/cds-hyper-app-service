using {cuid} from '@sap/cds/common';


@path : '/hyper'
@impl : './impl/DemoHyperServiceImpl.js'
service DemoHyperService {

  entity Human : cuid {
    Name : String(255);
    Age  : Integer;
  }

}
