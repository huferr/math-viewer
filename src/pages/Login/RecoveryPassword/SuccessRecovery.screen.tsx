import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../helpers";
import { Content, Title } from "./RecoveryPassword.styles";

export const SuccessRecovery: React.FC = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      NavigateTo("login", navigation, {});
    }, 3000);
  }, []);

  return (
    <>
      <Content>
        <Title bold>Done.</Title>
        <Title green>Password changed!</Title>
      </Content>
    </>
  );
};