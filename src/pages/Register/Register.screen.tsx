import React from "react";
import { FullPage, Input } from "~/components";
import { TopIcon } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { useAppDispatch } from "~app/hooks";
import { verifyEmailFor } from "~app/slices/verifyEmailFor.slice";

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const goToVerifyEmail = () => {
    NavigateTo("verify_email", navigation, { isToOnboarding: true });
    dispatch(verifyEmailFor("register"));
  };

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      onPressPrimary={goToVerifyEmail}
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