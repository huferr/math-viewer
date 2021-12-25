import React, { useEffect } from "react";
import { Content, Title, TitleWrapper } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../helpers";

export const Onboarding: React.FC = () => {

  const navigation = useNavigation();
 
  useEffect(() => {
    setTimeout(() => {
      NavigateTo("welcome", navigation, {});
    }, 3000);
  }, []);

  return (
    <Content>
      <Title bold>Welcome to</Title>
      <TitleWrapper>
        <Title green>Math, </Title><Title>Hugo!</Title>
      </TitleWrapper>
    </Content>
  );
};