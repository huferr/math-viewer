import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, PhraseText, Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../services";

export const Login: React.FC = () => {

  const navigation = useNavigation();

  const goBack = () => NavigateTo("welcome", navigation, {});
  const goToVerifyEmail = () => NavigateTo("verify_email", navigation, { isToDashboard: true });
  const goToRecoveryPassword = () => NavigateTo("enter_recovery_email", navigation, {});

  const handleFooterMessage = (
    <FooterMessage>
      <PhraseText>&quot;The book of the world is written in mathematical language.&quot;</PhraseText>
      <AuthorText>- Galileu Galilei</AuthorText>
    </FooterMessage>
  ); 

  return (
    <FullPage 
      whiteTitle="Login to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToVerifyEmail}
      buttonSecondaryTitle="Forgot my password"
      onPressSecondary={goToRecoveryPassword}
      footerMessage={handleFooterMessage}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <Pi>π</Pi>
      <Input type="primary" style={{marginTop: 70}} placeholder="Email" errorText="Email do caralho"/>
      <Input type="primary" style={{marginTop: 10}} placeholder="Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};