import { parseHandlerName } from "../src/extension/impl/grammar";


describe("Handler Name Grammar Test Suite", () => {

  it("should support basic parse", () => {
    const information = parseHandlerName("onUpdate");
    expect(information).not.toBeNull();
    expect(information).toMatchObject({
      hooks: ["on"],
      events: ["UPDATE"]
    });
  });

  it('should support many cases (no error)', () => {
    [
      "onDeleteHuman",
      "OnUpdatePeople",
      "On_Read_Animal",
    ].map(parseHandlerName)

  });

  it("should support multi hooks", () => {
    expect(parseHandlerName("onOrBeforeUpdateChildren")).toMatchObject({
      hooks: ["on", "before"],
      events: ["UPDATE"],
      entity: "Children"
    });
  });

  it("should support without event", () => {
    expect(parseHandlerName("beforePeople")).toMatchObject({
      hooks: ["before"],
      events: [],
      entity: "People"
    });
  });

  it("should support with keyword", () => {
    expect(parseHandlerName("beforeUpdatePerson")).toMatchObject({
      hooks: ["before"],
      events: ["UPDATE"],
      entity: "Person"
    });
  });

});
