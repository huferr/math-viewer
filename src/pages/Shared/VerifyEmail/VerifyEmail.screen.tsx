import React, { useState } from "react";
import { TopIcon } from "./VerifyEmail.styles";
import { useNavigation } from "@react-navigation/core";
import { FullPage, InputPinCode } from "~/components";
import { NavigateTo } from "~/services";
import { Subtitle } from "~/styles";
import { useAppSelector } from "~app/hooks";
import { selectVerifyEmailForState } from "~app/slices/verifyEmailFor.slice";

export const VerifyEmail: React.FC = () => {
  const camefromPage = useAppSelector(selectVerifyEmailForState);
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");

  const goToNextPage = (value: string) => {
    // validade and go to onboarding screen
    if(value === "11111" && camefromPage === "register") NavigateTo("onboarding", navigation, {});
    // validade and go to dashboard screen
    if(value === "11111" && camefromPage === "login") NavigateTo("welcome", navigation, {});
    // validate and go to newPassword screen
    if(value === "11111" && camefromPage === "recovery_password") NavigateTo("new_password", navigation, {});
    // validate and go to success_change_email screen
    if(value === "11111" && camefromPage === "change_email") NavigateTo("change_email", navigation, {});
  };
 
  return (
    <FullPage 
      whiteTitle="Verify your" 
      greenTitle="Email"
      onPressGoBack={() => goBack()}
      onlyOneButton
      buttonSecondaryTitle="Resend code"
      onPressSecondary={() => {}}
      verticalBounce={false}
    >
      <TopIcon green>∆</TopIcon>
      <Subtitle
        marginTop={30}
        marginBottom={30}
        textAlign="center"
      >
        Enter the verification code we sent you in your email
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