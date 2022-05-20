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

  it('should support invoke action', async () => {
    const response = await axios.post('/hyper/Echo', { value: 'hello hyper-app-service' })
    expect(response.status).toBe(200)
    expect(response.data.value).toBe('hello hyper-app-service')
  });

  it('should support rest protocol', async () => {
    let response = await axios.get("/hyper-rest/Location")
    expect(response.status).toBe(200)
    expect(response.data).toHaveLength(0)

    response = await axios.get("/hyper-rest/Location?ID=chengdu")
    expect(response.status).toBe(404)


    response = await axios.post("/hyper-rest/Location", { Name: "chengdu", Country: "china", Size: 99999 })
    expect(response.status).toBe(201)
    expect(response.data.ID).not.toBeUndefined()

    response = await axios.get("/hyper-rest/Location", { params: { ID: response.data.ID } })
    expect(response.status).toBe(200)
    expect(response.data.Name).toBe("chengdu")
  });

});
