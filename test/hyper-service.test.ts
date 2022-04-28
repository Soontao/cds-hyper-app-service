import { setupTest } from "cds-internal-tool";

describe("Hyper Service Test Suite", () => {

  const axios = setupTest(__dirname, "./app");

  it("should support create human", async () => {
    const response = await axios.post('/hyper/Human', { Name: 'a human resource' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("human name length should not exceed 10 chars")
  });

  it("should support class method", async () => {
    let response = await axios.post('/hyper/Human', { Name: 'a human' })
    expect(response.status).toBe(201)
    response = await axios.delete(`/hyper/Human(${response.data.ID})`)
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("delete is not allowed")
  });

});
