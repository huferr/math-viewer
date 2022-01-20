import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input } from "../../../components";
import { Subtitle } from "../../../styles";

export const ChangeNickname: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <FullPage
      onPressGoBack={goBack}
      whiteTitle="Change"
      greenTitle="Nickname"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={() => {}}
      verticalBounce={false}
    >
      <Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Subtitle green italic>new Nickname</Subtitle>
        {" "}
        below.
      </Subtitle>
      <Input type="minimal" placeholder="New nickname"/>
    </FullPage>
  );
};