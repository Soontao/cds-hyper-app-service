import { setupTest } from "cds-internal-tool";

describe("Fundamental Test Suite", () => {

  const axios = setupTest(__dirname, "./app");

  it("should support start server", async () => {
    const response = await axios.get("/demo/$metadata");
    expect(response.status).toBe(200);
    expect(response.data).toMatch(/People/);
  });

  it("should support simple handler with plain '@impl.on.create'", async () => {
    const response = await axios.post("/demo/Animal", { Name: "dog" });
    expect(response.status).toBe(201);
    expect(response.data.Name).toBe("dog1");
  });

});
