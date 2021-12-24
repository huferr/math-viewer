import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, TopIcon, PhraseText } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../helpers/navigateTo";

export const Register: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      onPressGoBack={() => goBack()}
      onPressPrimary={() => NavigateTo("verifyEmail", navigation, {})}
      buttons
      onlyOneButton
      buttonPrimary
      buttonPrimaryTitle="Continue"
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <TopIcon>λ</TopIcon>
      <Input style={{marginTop: 10}} placeholder="Nickname" errorText="Nickname do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Email" errorText="Email do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Password" errorText="Password do caralho"/>
      <Input style={{marginTop: 10}} placeholder="Confirm" errorText="Confirm password do caralho"/>
    </FullPage>
  );
};