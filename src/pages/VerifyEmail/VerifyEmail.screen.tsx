import React, { useState } from "react";
import { TopIcon, Subtitle } from "./VerifyEmail.styles";
import { useNavigation } from "@react-navigation/core";
import { FullPage, InputPinCode } from "../../components";
import { NavigateTo } from "../../helpers";
import { useRoute } from "@react-navigation/native";

export const VerifyEmail: React.FC = () => {
  const route = useRoute();
  const {
    isToOnboarding,
    isToDashboard,
    isToSuccessRecovery
  } = route.params as {
      isToOnboarding: boolean,
      isToDashboard: boolean,
      isToSuccessRecovery: boolean
    };
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");

  const goToNextPage = (value: string) => {
    // validade and go to onboarding screen
    if(value === "12345" && isToOnboarding) NavigateTo("onboarding", navigation, {});
    // validade and go to dashboard screen
    if(value === "11111" && isToDashboard) NavigateTo("welcome", navigation, {});
    // validate and go to successRecovery screen
    if(value === "22222" && isToSuccessRecovery) NavigateTo("successRecovery", navigation, {});
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
      <Subtitle>Enter the verification code we sent you in your email</Subtitle>
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