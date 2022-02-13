/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { getAnimationSize } from "./getAnimationSize";

describe("Services / getAnimationSize", () => {
  it("Should not return falsy", () => {
    const v = Math.random();
    const input = getAnimationSize(v);
    expect(input).not.toBeFalsy;
  });
  it("Should return 0 when params is a string", () => {
    const v = "";
    const input = getAnimationSize(v);
    expect(input).toBe(0);
  });
});