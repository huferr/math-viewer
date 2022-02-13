/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { circleAreaFormula } from "./geometry";

describe("Geometry / Circle Area Formula", () => {
  it("should return 314.159 when x is 10", () => {
    const x = 10;
    const output = circleAreaFormula(x);
    const res = 314.16;
    expect(output).toBe(res);
  });
  it("should return 33040283.88 when x is 3243", () => {
    const x = 3243;
    const output = circleAreaFormula(x);
    const res = 33040283.88;
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is a string", () => {
    const x = "string";
    const output = circleAreaFormula(x);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is undefined", () => {
    const x = undefined;
    const output = circleAreaFormula(x);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is null", () => {
    const x = null;
    const output = circleAreaFormula(x);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is less than 0", () => {
    const x = -10;
    const output = circleAreaFormula(x);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is NaN", () => {
    const x = "@@@;";
    const output = circleAreaFormula(x);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should NOT return falsy when x is a number", () => {
    const x = Math.random();
    const output = circleAreaFormula(x);
    expect(output).not.toBeFalsy;
  });
});