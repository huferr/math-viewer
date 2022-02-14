import React from "react";
import { FullPage, Input } from "~/components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { Subtitle, TopIcon } from "./RecoveryPassword.styles";

export const EnterRecoveryEmail: React.FC = () => {

  const navigation = useNavigation();

  const goBack = () => NavigateTo("login", navigation, {});
  const goToVerifyEmail = () => NavigateTo("verify_email", navigation, { isToNewPassword: true });

  return (
    <FullPage
      greenTitleFirst 
      whiteTitle="Recovery" 
      greenTitle="Password" 
      onPressGoBack={goBack}
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToVerifyEmail}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <TopIcon green>β</TopIcon>
      <Subtitle>Please, enter your email below, we will send you a verification code</Subtitle>
      <Input type="primary" style={{marginTop: 20}} placeholder="Email" errorText="Email do caralho"/>
    </FullPage>
  );
};