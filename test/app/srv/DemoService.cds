using {cuid} from '@sap/cds/common';

@assert.unique : {unique_name : [Name]}
service DemoService {

  @impl : './0001.js'
  entity People : cuid {
    Name : String(255);
    Age  : Integer;
  }

}
