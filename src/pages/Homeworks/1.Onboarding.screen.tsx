import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Content } from "./Homeworks.styles";
import { Heading, Paragraph } from "../../styles";
import { NavigateTo } from "../../services";

export const OnboardingHomeworks: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      NavigateTo("homeworks", navigation, {});
    }, 2500);
  }, []);
  
  return (
    <Content>
      <Heading bold>Welcome to</Heading>
      <Heading green>Homeworks<Heading>!</Heading></Heading>
      <Paragraph textAlign="center" marginTop={20}>
        Here you can
        {" "}
        <Paragraph green>exercise</Paragraph>
        {" "}
        what you have learned so far.
        Choose any category. For each section
        {" "}
        <Paragraph green>completed</Paragraph>
        , you will receive an amount of
        {" "}
        <Paragraph green>mathscore</Paragraph>!
      </Paragraph>
    </Content>
  );
};
