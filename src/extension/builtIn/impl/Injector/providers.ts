/* eslint-disable max-len */
import { cwdRequireCDS, EntityDefinition, fuzzy } from "cds-internal-tool";
import { getOrCreateRepository } from "../../repo";
import { findEntityDefByRepoName, isRepositoryName } from "../../repo/utils";
import { InjectContext } from "./InjectContext";
import { ParameterInjectProvider } from "./ParameterInjectProvider";



/**
 * cds.ApplicationService provider
 */
export const ApplicationServiceProvider: ParameterInjectProvider = {
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

/**
 * cds.Service provider
 */
export const ServiceProvider: ParameterInjectProvider = {
  match: function (parameterName: string): boolean {
    return typeof cwdRequireCDS()?.requires?.[parameterName] === "object";
  },
  provide: function (parameterName: string) {
    return cwdRequireCDS().connect.to(parameterName);
  }
};

/**
 * repository provider
 */
export const RepositoryProvider: ParameterInjectProvider = {
  match: function (parameterName: string, context: InjectContext): boolean {
    return isRepositoryName(parameterName) && findEntityDefByRepoName(parameterName, context.service) !== undefined;
  },
  provide: function (parameterName: string, context: InjectContext) {
    return getOrCreateRepository(findEntityDefByRepoName(parameterName, context.service) as EntityDefinition);
  }
};
