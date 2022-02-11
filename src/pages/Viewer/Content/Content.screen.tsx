import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FullPage } from "../../../components";
import { NavigateTo } from "../../../services";

import { Text } from "react-native";
import { ViewerPagesTypes } from "../../../typings/pages";

export const Content: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { page } = route.params as { page: ViewerPagesTypes};
  const goBack = () => NavigateTo("viewer", navigation, {});
  
  const renderPages: Record<ViewerPagesTypes, JSX.Element> = {
    circle_area_formula: <Text>circulo</Text>,
    triangle_area_formula: <Text>triangulo</Text>
  };

  return (
    <FullPage onPressGoBack={goBack}>
      {renderPages[page]}
    </FullPage>
  );
};