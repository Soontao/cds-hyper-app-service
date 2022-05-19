@path     : '/-/async-store'
@protocol : 'rest'
service AsyncStoreService {

  @readonly
  entity Response {
    statusCode : Integer;
    body       : String(10240);
  }

}
