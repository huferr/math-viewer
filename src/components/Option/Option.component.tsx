import React from "react";
import { EditIcon } from "~/assets/icons";
import * as Text from "~/styles/typography";
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
        <Text.Paragraph green marginTop={5} marginBottom={5}>{title}</Text.Paragraph>
        <Text.Paragraph>{content}</Text.Paragraph>
      </ContentWrapper>
      <IconWrapper>
        <EditIcon />
      </IconWrapper>
    </Container>
  );
};