import React from "react";
import { FullPage, Input } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../services";
import { Subtitle, TopIcon } from "./RecoveryPassword.styles";

export const NewPassword: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => NavigateTo("enter_recovery_email", navigation, {});
  const goToSuccessRecovery = () => NavigateTo("successRecovery", navigation, {});

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
      <Subtitle>Set and confirm your new password</Subtitle>
      <Input type="primary" style={{marginTop: 20}} placeholder="New password" errorText="Senha do caralho"/>
      <Input type="primary" style={{marginTop: 20}} placeholder="Confirm Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};