import React from "react";
import { EditIcon } from "../../assets/icons";
import { Paragraph } from "../../styles";
import { Container, ContentWrapper, IconWrapper } from "./Option.styles";

interface OptionProps {
  title: string;
  content: string;
  onPress: () => void;
}

export const Option: React.FC<OptionProps> = (props) => {
  const { title, content, onPress} = props;
  return (
    <Container onPress={onPress}>
      <ContentWrapper>
        <Paragraph green marginTop={5} marginBottom={5}>{title}</Paragraph>
        <Paragraph>{content}</Paragraph>
      </ContentWrapper>
      <IconWrapper>
        <EditIcon />
      </IconWrapper>
    </Container>
  );
};