import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, PhraseText, Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";

export const Login: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

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
      goBack
      onPressGoBack={() => goBack()}
      buttons
      buttonPrimary
      buttonPrimaryTitle="Continue"
      buttonSecondary
      buttonSecondaryTitle="Forgot my password"
      footerMessage={handleFooterMessage()}
      verticalBounce={false}
    >
      <Pi>π</Pi>
      <Input style={{marginTop: 70}} placeholder="Email" errorText="Email do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};