@protocol : 'rest'
@impl     : './Service.ts'
service AsyncExecutionService {

  @readonly
  entity AsyncExecution {
    statusCode : Integer;
    body       : String(10240);
  }

}
