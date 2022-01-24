import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input } from "../../components";


export const Search: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <FullPage
      onPressGoBack={goBack}
      greenTitle="looking for?"
      whiteTitle="What are you"
      titleFontSize={24}
    >
      <Input style={{ marginTop: 20 }} type="primary" placeholder="Search" />
    </FullPage>
  );
};