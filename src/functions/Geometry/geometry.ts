export const circleAreaFormula = (x: number) => {
  const validadeX = (typeof x !== "number" || x <= 0 || Number.isNaN(x));
  if (validadeX) return "Please, enter a valid number!";

  const res = String(3.14159 * x ** 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));
  
  return formatedRes;
};

export const triangleAreaFormula = (h: number, b: number) => {
  const validateH = (typeof h !== "number" || h <= 0);
  const validadeB = (typeof b !== "number" || b <= 0);
  const isNaN = (Number.isNaN(h) || Number.isNaN(b));

  if (validateH || validadeB ||isNaN) return "Please, enter a valid number!";

  const res = String((h * b) / 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));

  return formatedRes;
};