import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FullPage } from "~/components";
import { NavigateTo } from "~/services";
import { ViewerPagesTypes } from "~/typings";
import { CircleAreaFormula, TrapezoidAreaFormula, TriangleAreaFormula } from "./Geometry";

export const Content: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page } = route.params as { page: ViewerPagesTypes};
  const goBack = () => NavigateTo("viewer", navigation, {});
  
  const renderPages: Record<ViewerPagesTypes, JSX.Element> = {
    circle_area_formula: <CircleAreaFormula />,
    triangle_area_formula: <TriangleAreaFormula />,
    trapezoid_area_formula: <TrapezoidAreaFormula />,
  };

  return (
    <FullPage onPressGoBack={goBack} enableAvoidingView={false}>
      {renderPages[page]}
    </FullPage>
  );
};