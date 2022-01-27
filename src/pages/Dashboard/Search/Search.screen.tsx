import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input } from "../../../components";


export const Search: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [ search, setSearch ] = useState("");

  return (
    <FullPage
      onPressGoBack={goBack}
      greenTitle="looking for?"
      whiteTitle="What are you"
      titleFontSize={24}
      verticalBounce={false}
    >
      <Input style={{ marginTop: 20 }} type="search" placeholder="Search" value={search} onChangeText={setSearch} />
    </FullPage>
  );
};