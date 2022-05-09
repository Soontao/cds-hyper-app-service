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
      "onDeleteForHuman",
      "OnUpdateForPeople",
      "On_Read_For_Animal",
    ].map(parseHandlerName)

  });

  it("should support multi hooks", () => {
    expect(parseHandlerName("onUpdateForChildren")).toMatchObject({
      hooks: ["on"],
      events: ["UPDATE"],
      entity: "Children"
    });
  });

  it("should support without event", () => {
    expect(parseHandlerName("beforeForPeople")).toMatchObject({
      hooks: ["before"],
      events: [],
      entity: "People"
    });
  });

  it("should support with keyword", () => {
    expect(parseHandlerName("beforeUpdateForPerson")).toMatchObject({
      hooks: ["before"],
      events: ["UPDATE"],
      entity: "Person"
    });
  });

  it('should support function and action', () => {
    expect(parseHandlerName("onActionPlus")).toMatchObject({
      hooks: ["on"],
      events: [],
      actions: ['Plus'],
    });
  });

  it('should support function and action with entity', () => {
    expect(parseHandlerName("onActionPlusForOrder")).toMatchObject({
      hooks: ["on"],
      events: [],
      actions: ['Plus'],
      entity: "Order"
    });
  });

});
