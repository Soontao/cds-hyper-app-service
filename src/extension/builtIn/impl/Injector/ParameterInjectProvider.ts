import { InjectContext } from "./InjectContext";

/**
 * provide value for parameter
 */
export interface ParameterInjectProvider<T = any> {


  /**
   * check whether the parameter could be provided by this provider
   * 
   * @param parameterName 
   */
  match(parameterName: string, context: InjectContext): boolean;

  /**
   * really provision the parameter instance by name 
   * 
   * @param parameterName 
   * @param context 
   */
  provide(parameterName: string, context: InjectContext): T | Promise<T>;

}
