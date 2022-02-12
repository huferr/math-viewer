import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FullPage } from "../../../components";
import { NavigateTo } from "../../../services";

import { Text } from "react-native";
import { ViewerPagesTypes } from "../../../typings/pages";
import { CircleAreaFormula } from "./Geometry";
import { TriangleAreaFormula } from "./Geometry/TriangleAreaFormula.screen";

export const Content: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page } = route.params as { page: ViewerPagesTypes};
  const goBack = () => NavigateTo("viewer", navigation, {});
  
  const renderPages: Record<ViewerPagesTypes, JSX.Element> = {
    circle_area_formula: <CircleAreaFormula />,
    triangle_area_formula: <TriangleAreaFormula />
  };

  return (
    <FullPage onPressGoBack={goBack}>
      {renderPages[page]}
    </FullPage>
  );
};