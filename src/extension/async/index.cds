@protocol : 'rest'
@impl     : './Service'
service AsyncExecutionService {

  @readonly
  entity AsyncExecution {
    statusCode : Integer;
    body       : String(10240);
  }

}
