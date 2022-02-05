import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Content, Title, Text } from "./SmallCard.styles";

export interface SmallCardProps extends TouchableOpacityProps {
  title: string,
  text: string,
  marginBottom?: number,
}

export const SmallCard: React.FC<SmallCardProps> = (props) => {
  const { marginBottom, title, text, disabled } = props;
    
  return (
    <Container marginBottom={marginBottom}>
      <Title disabled={disabled}>{title}</Title>
      <Content disabled={disabled}>
        <Text 
          green={Boolean(disabled)} 
          italic={Boolean(disabled)}
          disabled={disabled}>
          {disabled ? "Completed": text}
        </Text>
      </Content>
    </Container>
  );
};