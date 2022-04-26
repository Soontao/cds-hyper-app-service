import { setupTest } from "cds-internal-tool";

describe("Fundamental Test Suite", () => {

  const axios = setupTest(__dirname, "./app");

  it("should support start server", async () => {
    const response = await axios.get("/demo/$metadata");
    expect(response.status).toBe(200);
    expect(response.data).toMatch(/People/);
  });


});
