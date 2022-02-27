import React from "react";
import { FullPage, Input } from "~/components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { TopIcon } from "./RecoveryPassword.styles";
import * as Text from "~/styles/typography";

export const NewPassword: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => NavigateTo("enter_recovery_email", navigation, {});
  const goToSuccessRecovery = () => NavigateTo("success_recovery", navigation, {});

  return (
    <FullPage
      greenTitleFirst 
      whiteTitle="Recovery" 
      greenTitle="Password" 
      onPressGoBack={goBack}
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToSuccessRecovery}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <TopIcon green>β</TopIcon>
      <Text.Subtitle marginTop={30} marginBottom={30} textAlign="center">Set and confirm your new password</Text.Subtitle>
      <Input type="primary" style={{marginTop: 20}} placeholder="New password" errorText="Senha do caralho"/>
      <Input type="primary" style={{marginTop: 20}} placeholder="Confirm Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};