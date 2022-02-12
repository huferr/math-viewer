export const circleAreaFormula = (x: number) => {
  const res = String(3.14159 * Number(x) ** 2);
  const formatedRes = Number(parseFloat(res).toFixed(2));
  
  if (typeof x !== "number" || x <= 0) return "Please, enter a valid number";
  
  return formatedRes;
};