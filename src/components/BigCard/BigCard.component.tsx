import React from "react";
import * as Text from "~/styles/typography";
import { Container, Content } from "./BigCard.styles";

export interface BigCardProps {
  title: string;
  subtitle: string;
  icon?: Element;
  marginBottom?: number;
  onPress: () => void;
}

export const BigCard: React.FC<BigCardProps> = (props) => {
  const { title, subtitle, icon, marginBottom, onPress } = props;

  return (
    <Container marginBottom={marginBottom}>
      <Text.HeadingSmall green>{title}</Text.HeadingSmall>
      <Content onPress={onPress}>
        {icon}
        <Text.Subtitle textAlign="center" width="90%">{subtitle}</Text.Subtitle>
      </Content>
    </Container>
  );
};