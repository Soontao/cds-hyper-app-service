// @ts-nocheck
import { getFunctionArgNames } from "../src/extension/impl/Injector";

describe("Injector Test Suite", () => {

  it("should support get plain function arg names", () => {
    function f(arg0: any, arg1: any, arg99: any) { }
    expect(getFunctionArgNames(f)).toStrictEqual([
      "arg0",
      "arg1",
      "arg99",
    ]);
  });

  it("should support get async function arg names", () => {
    async function f(arg0: any, arg1: any, arg99: any) { }
    expect(getFunctionArgNames(f)).toStrictEqual([
      "arg0",
      "arg1",
      "arg99",
    ]);
  });

  it("should support get arrow function arg names", () => {
    const f = (arg0: any, arg1: any, arg99: any) => { }
    expect(getFunctionArgNames(f)).toStrictEqual([
      "arg0",
      "arg1",
      "arg99",
    ]);
  });

  it("should support get arrow async function arg names", () => {
    const f = async (arg0: any, arg1: any, arg99: any) => { }
    expect(getFunctionArgNames(f)).toStrictEqual([
      "arg0",
      "arg1",
      "arg99",
    ]);
  });

  it('should support class level function', () => {

    class C {
      async a(arg0: any, arg1: any, arg99: any) { }
      b(arg0: any, arg1: any, arg99: any) { }
      e = (arg0: any, arg1: any, arg99: any) => { }
      f = async (arg0: any, arg1: any, arg99: any) => { }
    }
    const c = new C()
    for (const methodName of ['a', 'b', 'e', 'f']) {
      expect(getFunctionArgNames(c[methodName])).toStrictEqual([
        "arg0",
        "arg1",
        "arg99",
      ])
    }

  });

});
