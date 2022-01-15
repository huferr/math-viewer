import React, { useState } from "react";
import { TopIcon } from "./VerifyEmail.styles";
import { useNavigation } from "@react-navigation/core";
import { FullPage, InputPinCode } from "../../components";
import { NavigateTo } from "../../services";
import { useRoute } from "@react-navigation/native";
import { Subtitle } from "../../styles";

export const VerifyEmail: React.FC = () => {
  const route = useRoute();
  const {
    isToOnboarding,
    isToDashboard,
    isToNewPassword
  } = route.params as {
      isToOnboarding: boolean,
      isToDashboard: boolean,
      isToNewPassword: boolean
    };
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");

  const goToNextPage = (value: string) => {
    // validade and go to onboarding screen
    if(value === "12345" && isToOnboarding) NavigateTo("onboarding", navigation, {});
    // validade and go to dashboard screen
    if(value === "11111" && isToDashboard) NavigateTo("welcome", navigation, {});
    // validate and go to newPassword screen
    if(value === "22222" && isToNewPassword) NavigateTo("newPassword", navigation, {});
  };
 
  return (
    <FullPage 
      whiteTitle="Verify your" 
      greenTitle="Email"
      onPressGoBack={() => goBack()}
      buttons
      onlyOneButton
      buttonSecondary
      buttonSecondaryTitle="Resend code"
      onPressSecondary={() => {}}
      verticalBounce={false}
    >
      {console.log(route.params)}
      <TopIcon green>∆</TopIcon>
      <Subtitle marginTop={30} marginBottom={30}>Enter the verification code we sent you in your email</Subtitle>
      <InputPinCode
        secure
        size={5} 
        value={code} 
        onChange={setCode}
        onFinish={goToNextPage}
      />
    </FullPage>
  );
};