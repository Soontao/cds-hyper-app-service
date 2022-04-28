// @ts-nocheck
import { getFunctionArgNames } from "../src/HandlerInjector";

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

});
