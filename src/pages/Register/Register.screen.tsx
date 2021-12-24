import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, Lambda, PhraseText } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";

export const Register: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const handleFooterMessage = () => (
    <FooterMessage>
      <PhraseText>&quot;What we know is a drop. What we ignore is an ocean.&quot;</PhraseText>
      <AuthorText>- Isaac Newton</AuthorText>
    </FooterMessage>
  );

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      goBack
      onPressGoBack={() => goBack()}
      buttons
      onlyOneButton
      buttonPrimary
      buttonPrimaryTitle="Continue"
      footerMessage={handleFooterMessage()}
      verticalBounce={false}
    >
      <Lambda>λ</Lambda>
      <Input style={{marginTop: 10}} placeholder="Nickname" errorText="Nickname do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Email" errorText="Email do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Password" errorText="Password do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Confirm" errorText="Confirm password do caralho"/>
    </FullPage>
  );
};