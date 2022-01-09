import React, { useEffect } from "react";
import { Content, TitleWrapper } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../helpers";
import { Heading } from "../../styles";

export const Onboarding: React.FC = () => {

  const navigation = useNavigation();
 
  useEffect(() => {
    setTimeout(() => {
      NavigateTo("welcome", navigation, {});
    }, 3000);
  }, []);

  return (
    <Content>
      <Heading bold>Welcome to</Heading>
      <TitleWrapper>
        <Heading green>Math, </Heading><Heading>Hugo!</Heading>
      </TitleWrapper>
    </Content>
  );
};