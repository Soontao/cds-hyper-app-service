import { setupTest } from "cds-internal-tool";

describe("Hyper Service Test Suite", () => {

  const axios = setupTest(__dirname, "./app");

  it("should support create human", async () => {
    const response = await axios.post('/hyper/Human', { Name: 'a human resource' })
    expect(response.status).toBe(400)
    expect(response.data.error.message).toBe("human name length should not exceed 10 chars")
  });

});
