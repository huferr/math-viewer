import React, { useEffect } from "react";
import { Content, TitleWrapper } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import * as Text from "~/styles/typography";

export const Onboarding: React.FC = () => {

  const navigation = useNavigation();
 
  useEffect(() => {
    setTimeout(() => {
      NavigateTo("welcome", navigation, {});
    }, 3000);
  }, []);

  return (
    <Content>
      <Text.Heading bold>Welcome to</Text.Heading>
      <TitleWrapper>
        <Text.Heading green>Math, </Text.Heading><Text.Heading>Hugo!</Text.Heading>
      </TitleWrapper>
    </Content>
  );
};