@protocol : 'rest'
@impl     : './Service'
service AsyncExecutionService {

  @readonly
  entity AsyncExecution {
    key ID         : UUID;
        StatusCode : Integer;
        Body       : String(10240);
  }

}
