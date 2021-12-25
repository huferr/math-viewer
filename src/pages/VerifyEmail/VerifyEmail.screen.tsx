import React, { useState } from "react";
import { TopIcon, Subtitle } from "./VerifyEmail.styles";
import { useNavigation } from "@react-navigation/core";
import { FullPage, InputPinCode } from "../../components";
import { NavigateTo } from "../../helpers";

export const VerifyEmail: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");

  const nextPage = (value: string) => {
    if(value === "12345") NavigateTo("onboarding", navigation, {});
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
        onFinish={nextPage}
      />
    </FullPage>
  );
};