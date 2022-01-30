import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage } from "../../components";
import { NavigateTo } from "../../services";


export const Homeworks: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {});   
  
  return (
    <FullPage
      onPressGoBack={goBack}
    >
      
    </FullPage>
  );
};
