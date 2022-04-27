import { parseHandlerName } from "../src/grammar";


describe("Handler Name Grammar Test Suite", () => {

  it("should support basic parse", () => {
    const information = parseHandlerName("onUpdate");
    expect(information).not.toBeNull();
    expect(information).toStrictEqual({
      hooks: ["on"],
      events: ["UPDATE"]
    });
  });

  it("should support multi hooks", () => {
    expect(parseHandlerName("onOrBeforeUpdateChildren")).toStrictEqual({
      hooks: ["on", "before"],
      events: ["UPDATE"],
      entity: "Children"
    });
  });

  it("should support without event", () => {
    expect(parseHandlerName("beforePeople")).toStrictEqual({
      hooks: ["before"],
      events: [],
      entity: "People"
    });
  });

  it("should support with keyword", () => {
    expect(parseHandlerName("beforeUpdatePerson")).toStrictEqual({
      hooks: ["before"],
      events: ["UPDATE"],
      entity: "Person"
    });
  });
  
});
