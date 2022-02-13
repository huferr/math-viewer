/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { triangleAreaFormula } from "./geometry";

describe("Geometry / Triangle Area Formula", () => {
  it("should return 50 when both h and b are 10", () => {
    const h = 10;
    const b = 10;
    const output = triangleAreaFormula(h, b);
    const res = 50;
    expect(output).toBe(res);
  });
  it("should NOT return falsy when both h and b are numbers", () => {
    const h = Math.random();
    const b = Math.random();
    const output = triangleAreaFormula(h, b);
    expect(output).not.toBeFalsy;
  });
  it("should return 'Please, enter a valid number' when h is a string", () => {
    const h = "";
    const b = 10;
    const output = triangleAreaFormula(h, b);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when b is a string", () => {
    const h = 10;
    const b = "";
    const output = triangleAreaFormula(h, b);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when both h and b are strings", () => {
    const h = "";
    const b = "";
    const output = triangleAreaFormula(h, b);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when x is NaN", () => {
    const h = "asdad";
    const b = "asdas";
    const output = triangleAreaFormula(h, b);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
});