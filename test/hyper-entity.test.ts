import { cwdRequireCDS, setupTest } from "cds-internal-tool";
import { isHyperAppService, isHyperEntityHandler, isRepository } from "../src/utils";
import type PeopleEntityHandlers from "./app/srv/impl/PeopleEntityHandler";


describe('Hyper Entity Handler Test Suite', () => {

  const axios = setupTest(__dirname, "./app");

  const cds = cwdRequireCDS()

  it('should support validate by entity service', async () => {
    let response = await axios.post('/demo/Peoples', { Name: 'theo' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("length people name is not enough")
    // another
    response = await axios.post('/hyper/Peoples', { Name: 'theo' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("length people name is not enough")
  });

  it('should support inject repository into entity handler', async () => {
    const demoHyperService = await cds.connect.to("DemoHyperService")
    expect(isHyperAppService(demoHyperService)).toBeTruthy()
    if (isHyperAppService(demoHyperService)) {
      const peopleEntityHandler = demoHyperService.getEntityHandler(demoHyperService.entities['Peoples']) as PeopleEntityHandlers
      expect(isHyperEntityHandler(peopleEntityHandler)).toBeTruthy()
      expect(isRepository(peopleEntityHandler.peopleRepository)).toBeTruthy()
    }
  });



});
