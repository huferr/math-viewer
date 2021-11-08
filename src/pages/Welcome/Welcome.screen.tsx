import React from "react";
import { GraphIcon } from "../../assets/icons/graph";
import { Body, Container, IconWrapper, Lambda, Pi, Title, WhiteTitle } from "./Welcome.styles";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Body>
        <Lambda>λ</Lambda>
        <Title>Math{"\n"}<WhiteTitle>Viewer</WhiteTitle></Title>
        <IconWrapper>
          <Pi>π</Pi>
          <GraphIcon />
        </IconWrapper>
      </Body>
    </Container>
  );
};