import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { GraphIcon } from "../../assets/icons/graph";
import { Button } from "../../components/Button/Button.component";
import { Body, Container, IconWrapper, Lambda, Pi, Title, WhiteTitle, ByText, NameText } from "./Welcome.styles";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Body>
        <Lambda>λ</Lambda>
        <Title>Math{"\n"}<WhiteTitle>Viewer</WhiteTitle></Title>
        <IconWrapper>
          <Pi>π</Pi>
          <GraphIcon/>
        </IconWrapper>
        <Button type="secondary" title="Sign Up" style={{marginBottom: 30}}/>
        <Button type="primary" title="Login" style={{marginBottom: 60}}/>
        <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL("https://github.com/huferr")}>
          <ByText>by{" "}<NameText>huferr</NameText>
          </ByText>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};