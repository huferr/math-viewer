import { ViewerPagesTypes } from "../typings/pages";

export interface ViewerFormulaTypes {
    id: ViewerPagesTypes,
    title: string,
}

export const viewerFormulas: ViewerFormulaTypes[] = [
  {
    id: "circle_area_formula",
    title: "Circle Area Formula",
  },
  {
    id: "triangle_area_formula",
    title: "Triangle Area Formula",
  },
  {
    id: "trapezoid_area_formula",
    title: "Trapezoid Area Formula",
  }
];