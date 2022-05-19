/* eslint-disable max-len */
import { cwdRequireCDS, EntityDefinition, fuzzy } from "cds-internal-tool";
import { getOrCreateRepository } from "../../repo";
import { findEntityDefByRepoName, isRepositoryName } from "../../repo/utils";
import { InjectContext } from "./InjectContext";
import { ParameterInjectProvider } from "./ParameterInjectProvider";



// TODO: support cds.requires services
export const CDSServiceProvider: ParameterInjectProvider = {
  match(parameterName: string, context: InjectContext): boolean {
    return fuzzy.findService(parameterName, context.model) !== undefined;
  },
  provide(parameterName: string, context: InjectContext) {
    const def = fuzzy.findService(parameterName, context.model);
    if (def !== undefined) {
      return cwdRequireCDS().services[def.name];
    }
  },
};


export const RepositoryProvider: ParameterInjectProvider = {
  match: function (parameterName: string, context: InjectContext): boolean {
    return isRepositoryName(parameterName) && findEntityDefByRepoName(parameterName, context.service) !== undefined;
  },
  provide: function (parameterName: string, context: InjectContext) {
    return getOrCreateRepository(findEntityDefByRepoName(parameterName, context.service) as EntityDefinition);
  }
};
