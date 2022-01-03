import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, PhraseText, Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../helpers";

export const Login: React.FC = () => {

  const navigation = useNavigation();

  const handleFooterMessage = () => (
    <FooterMessage>
      <PhraseText>&quot;The book of the world is written in mathematical language.&quot;</PhraseText>
      <AuthorText>- Galileu Galilei</AuthorText>
    </FooterMessage>
  ); 

  return (
    <FullPage 
      whiteTitle="Login to" 
      greenTitle="Math" 
      onPressGoBack={() => NavigateTo("welcome", navigation, {})}
      buttons
      buttonPrimary
      buttonPrimaryTitle="Continue"
      onPressPrimary={() => NavigateTo("verifyEmail", navigation, {isToDashboard: true as boolean})}
      buttonSecondary
      buttonSecondaryTitle="Forgot my password"
      onPressSecondary={() => NavigateTo("recoveryPassword", navigation, {})}
      footerMessage={handleFooterMessage()}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <Pi>π</Pi>
      <Input style={{marginTop: 70}} placeholder="Email" errorText="Email do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};