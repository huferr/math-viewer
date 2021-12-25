import React, { useState } from "react";
import { TopIcon, Subtitle } from "./VerifyEmail.styles";
import { useNavigation } from "@react-navigation/core";
import { FullPage, InputPinCode } from "../../components";
import { NavigateTo } from "../../helpers";
import { useRoute } from "@react-navigation/native";

export const VerifyEmail: React.FC = () => {
  const route = useRoute();
  const { onboarding } = route.params as {onboarding: boolean};
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");

  const goToNextPage = (value: string) => {
    if(value === "12345" && onboarding) NavigateTo("onboarding", navigation, {});
    if(value === "11111" && !onboarding) NavigateTo("welcome", navigation, {});
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
      <TopIcon green>∆</TopIcon>
      <Subtitle>Enter the verification code we sent you in your email
      </Subtitle>
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