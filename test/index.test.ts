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

  it('should support create book with before and after', async () => {
    let response = await axios.post('/demo/Book', { Name: 'book_1' })
    expect(response.status).toBe(500)
    response = await axios.post('/demo/Book', { Name: 'book_long_cat_1-0001' })
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject({ Name: 'book_long_cat_1-0001' })
    response = await axios.get(`/demo/Book(${response.data.ID})`)
    expect(response.status).toBe(200)
    expect(response.data).toMatchObject({ Name: 'book_long_cat_1-0001_afterRead' })
  });

});
