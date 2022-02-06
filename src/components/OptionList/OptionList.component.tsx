import React from "react";
import { ArrowRightIcon } from "../../assets/icons";
import { Paragraph } from "../../styles";
import { Container, ContentWrapper } from "./OptionList.styles";

interface OptionListProps {
  content: string;
  onPress?: () => void;
  hasArrow?: boolean;
}

export const OptionList: React.FC<OptionListProps> = (props) => {
  const { content, onPress, hasArrow} = props;
  return (
    <Container onPress={onPress}>
      <ContentWrapper>
        <Paragraph>{content}</Paragraph>
        {hasArrow && <ArrowRightIcon />}
        
      </ContentWrapper>
    </Container>
  );
};