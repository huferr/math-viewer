import React from "react";
import { FullPage, Input } from "~/components";
import { Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { useAppDispatch } from "~app/hooks";
import { verifyEmailFor } from "~app/slices/verifyEmailFor.slice";

export const Login: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  
  const goBack = () => NavigateTo("welcome", navigation, {});
  const goToVerifyEmail = () => {
    NavigateTo("verify_email", navigation, { isToDashboard: true });
    dispatch(verifyEmailFor("login"));
  };
  const goToRecoveryPassword = () => NavigateTo("enter_recovery_email", navigation, {});

  return (
    <FullPage 
      whiteTitle="Login to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToVerifyEmail}
      buttonSecondaryTitle="Forgot my password"
      onPressSecondary={goToRecoveryPassword}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <Pi>π</Pi>
      <Input type="primary" style={{marginTop: 70}} placeholder="Email" errorText="Email do caralho"/>
      <Input type="primary" style={{marginTop: 10}} placeholder="Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};