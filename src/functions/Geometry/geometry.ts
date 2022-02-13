// Circle Area
export const circleAreaFormula = (x: number) => {
  const validadeX = (typeof x !== "number" || x <= 0 || Number.isNaN(x));
  if (validadeX) return "Please, enter a valid number!";

  const res = String(3.14159 * x ** 2);
  const resDecimalPlaces = Number(res) < 0.10 ? 50 : 2;
  const formatedRes = Number(parseFloat(res).toFixed(resDecimalPlaces));
  return formatedRes;
};

// Triangle Area
export const triangleAreaFormula = (h: number, b: number) => {
  const validateH = (typeof h !== "number" || h <= 0);
  const validadeB = (typeof b !== "number" || b <= 0);
  const isNaN = (Number.isNaN(h) || Number.isNaN(b));

  if (validateH || validadeB ||isNaN) return "Please, enter a valid number!";

  const res = String((h * b) / 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));

  return formatedRes;
};

// Trapezoid Area
export const trapezoidAreaFormula = (b1: number, b2: number, h: number) => {
  const validateB1 = (typeof b1 !== "number" || b1 <= 0);
  const validadeB2 = (typeof b2 !== "number" || b2 <= 0);
  const validadeH = (typeof h !== "number" || h <= 0);
  const isNaN = (Number.isNaN(b1) || Number.isNaN(b2) || Number.isNaN(h));

  if (validateB1 || validadeB2 ||validadeH || isNaN) return "Please, enter a valid number!";

  const res = String(((b1 + b2) / 2) * h);
  const formatedRes = Number(parseFloat(res).toFixed(2));

  return formatedRes;
};