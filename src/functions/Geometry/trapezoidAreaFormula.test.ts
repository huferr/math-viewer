/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { trapezoidAreaFormula } from "./geometry";

describe("Geometry / Trapezoid Area Formula", () => {
  it("should return 100 when both b1, b2 and h are 10", () => {
    const b1 = 10;
    const b2 = 10;
    const h = 10;
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = 100;
    expect(output).toBe(res);
  });
  it("should NOT return falsy when both b1, b2 and h are numbers", () => {
    const b1 = Math.random();
    const b2 = Math.random();
    const h = Math.random();
    const output = trapezoidAreaFormula(b1, b2, h);
    expect(output).not.toBeFalsy;
  });
  it("should return 'Please, enter a valid number' when h is a string", () => {
    const b1 = Math.random();
    const b2 = Math.random();
    const h = "";
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when b2 is a string", () => {
    const b1 = Math.random();
    const b2 = "";
    const h = Math.random();
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when b1 is a string", () => {
    const b1 = "";
    const b2 = Math.random();
    const h = Math.random();
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when both b1, b2 and h are strings", () => {
    const b1 = "";
    const b2 = "";
    const h = "";
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
  it("should return 'Please, enter a valid number' when any of the args is NaN", () => {
    const b1 = "af";
    const b2 = "fdfs";
    const h = "sdf";
    const output = trapezoidAreaFormula(b1, b2, h);
    const res = "Please, enter a valid number!";
    expect(output).toBe(res);
  });
});