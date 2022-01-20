import React from "react";
import { FullPage, Input } from "../../components";
import { TopIcon } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../services/navigation.service";

export const Register: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      onPressGoBack={() => goBack()}
      onPressPrimary={() => NavigateTo("verifyEmail", navigation, {isToOnboarding: true as boolean})}
      onlyOneButton
      buttonPrimaryTitle="Continue"
      verticalBounce={false}
      enableAvoidingView={true}
    >
      <TopIcon>λ</TopIcon>
      <Input type="primary" style={{marginTop: 10}} placeholder="Nickname" errorText="Nickname do caralho"/>
      <Input type="primary" style={{marginTop: 10}} placeholder="Email" errorText="Email do caralho"/>
      <Input type="primary" style={{marginTop: 10}} placeholder="Password" errorText="Password do caralho"/>
      <Input type="primary" style={{marginTop: 10}} placeholder="Confirm password" errorText="Confirm password do caralho"/>
    </FullPage>
  );
};