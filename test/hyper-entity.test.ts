import { setupTest } from "cds-internal-tool";


describe('Hyper Entity Handler Test Suite', () => {
  const axios = setupTest(__dirname, "./app");


  it('should support validate by entity service', async () => {
    let response = await axios.post('/demo/Peoples', { Name: 'theo' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("length people name is not enough")
    // another
    response = await axios.post('/hyper/Peoples', { Name: 'theo' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("length people name is not enough")
  });



});
