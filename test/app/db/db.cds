using {cuid} from '@sap/cds/common';

entity People : cuid {
  Name : String(255);
  Age  : Integer;
}
