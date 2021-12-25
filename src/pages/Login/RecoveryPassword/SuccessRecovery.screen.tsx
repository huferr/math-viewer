import React from "react";
import { FullPage, Input } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../helpers";
import { Subtitle, TopIcon } from "./RecoveryPassword.styles";

export const SuccessRecovery: React.FC = () => {

  const navigation = useNavigation();

  return (
    <FullPage
      buttons
      buttonPrimary
      onlyOneButton
      buttonPrimaryTitle="Login"
      onPressPrimary={() => NavigateTo("login", navigation, {})}
      verticalBounce={false}
    >
      <TopIcon green>β</TopIcon>
      <Subtitle>Please, enter your email below, we will send you a verification code</Subtitle>
      <Input style={{marginTop: 20}} placeholder="Email" errorText="Email do caralho"/>
    </FullPage>
  );
};