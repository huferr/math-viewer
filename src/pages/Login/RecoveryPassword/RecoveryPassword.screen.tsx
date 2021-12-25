import React from "react";
import { FullPage, Input } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../helpers";
import { Subtitle, TopIcon } from "./RecoveryPassword.styles";

export const RecoveryPassword: React.FC = () => {

  const navigation = useNavigation();

  return (
    <FullPage
      greenTitleFirst 
      whiteTitle="Recovery" 
      greenTitle="Password" 
      onPressGoBack={() => NavigateTo("welcome", navigation, {})}
      buttons
      buttonPrimary
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={() => NavigateTo("verifyEmail", navigation, {isToSuccessRecovery: true as boolean})}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <TopIcon green>β</TopIcon>
      <Subtitle>Please, enter your email below, we will send you a verification code</Subtitle>
      <Input style={{marginTop: 20}} placeholder="Email" errorText="Email do caralho"/>
    </FullPage>
  );
};