import React from "react";
import { FullPage, Input } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../helpers";
import { Subtitle, TopIcon } from "./RecoveryPassword.styles";

export const NewPassword: React.FC = () => {

  const navigation = useNavigation();

  return (
    <FullPage
      greenTitleFirst 
      whiteTitle="Recovery" 
      greenTitle="Password" 
      onPressGoBack={() => NavigateTo("recoveryPassword", navigation, {})}
      buttons
      buttonPrimary
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={() => NavigateTo("successRecovery", navigation, {})}
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <TopIcon green>β</TopIcon>
      <Subtitle>Set and confirm your new password</Subtitle>
      <Input style={{marginTop: 20}} placeholder="New password" errorText="Senha do caralho"/>
      <Input style={{marginTop: 20}} placeholder="Confirm Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};