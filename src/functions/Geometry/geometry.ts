export const circleAreaFormula = (x: number) => {
  if (typeof x !== "number" || x <= 0) return "Please, enter a valid number";

  const res = String(3.14159 * x ** 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));
  
  return formatedRes;
};

export const triangleAreaFormula = (h: number, b: number) => {
  if ((typeof h !== "number" || h <= 0) || (typeof b !== "number" || b <= 0)) return "Please, enter a valid number";

  const res = String((h * b) / 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));

  return formatedRes;
};