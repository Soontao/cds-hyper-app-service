@protocol : 'rest'
@path     : '/hyper-rest'
@impl     : './impl/DemoRestServiceImpl'
service DemoRestService {

  entity Location {
    key ID      : String;
        Name    : String;
        Country : String;
        Size    : Decimal;
  };

}
