import React from "react";
import { HeadingSmall, Subtitle } from "../../styles";
import { Container, Content, IconWrapper, SubtitleWrapper } from "./BigCard.styles";

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
      <HeadingSmall green>{title}</HeadingSmall>
      <Content onPress={onPress}>
        <SubtitleWrapper>
          <Subtitle textAlign="left">{subtitle}</Subtitle>
        </SubtitleWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
      </Content>
    </Container>
  );
};