import React from "react";
import { HeadingSmall, Paragraph } from "../../styles";
import { Container, Content } from "./SmallCard.styles";

export interface SmallCardProps {
  title: string,
  text: string,
  marginBottom?: number,
}

export const SmallCard: React.FC<SmallCardProps> = (props) => {
  const { marginBottom, title, text } = props;
    
  return (
    <Container marginBottom={marginBottom}>
      <HeadingSmall green>{title}</HeadingSmall>
      <Content>
        <Paragraph>{text}</Paragraph>
      </Content>
    </Container>
  );
};