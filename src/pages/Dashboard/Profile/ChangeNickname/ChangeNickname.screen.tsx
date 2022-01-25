import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input } from "../../../../components";
import { Subtitle } from "../../../../styles";
import { NavigateTo } from "../../../../services";

export const ChangeNickname: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const goToSuccessChangeNickname = () => NavigateTo("success_change_nickname", navigation, {});
  
  return (
    <FullPage
      onPressGoBack={goBack}
      whiteTitle="Change"
      greenTitle="Nickname"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToSuccessChangeNickname}
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