export const getAnimationSize = (v: number) => {
  if (typeof v !== "number") return 0;
  else if (v <= 1) return 10;
  else if (v <= 3) return v * v * 3;
  else if (v <= 5) return v * v * 1.9;
  else if (v <= 8) return v * v * 1.5;
  else if (v <= 15) return v * v * 1.3;
  else return 320;
};