import React from "react";
import { FullPage, Input } from "~/components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { TopIcon } from "./RecoveryPassword.styles";
import * as Text from "~/styles/typography";
import { verifyEmailFor, useAppDispatch } from "~app";

export const EnterRecoveryEmail: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const goBack = () => NavigateTo("login", navigation, {});
  const goToVerifyEmail = () => {
    NavigateTo("verify_email", navigation, { isToNewPassword: true });
    dispatch(verifyEmailFor("recovery_password"));
  };

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
      <Text.Subtitle textAlign="center" marginTop={30}>Please, enter your email below, we will send you a verification code</Text.Subtitle>
      <Input type="primary" style={{marginTop: 20}} placeholder="Email" errorText="Email do caralho"/>
    </FullPage>
  );
};