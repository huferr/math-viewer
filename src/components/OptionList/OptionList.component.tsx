import React from "react";
import { ArrowRightIcon } from "../../assets/icons";
import { Paragraph } from "../../styles";
import { Container, Content, ContentWrapper } from "./OptionList.styles";

interface OptionListProps {
  content: string;
  onPress?: () => void;
  hasArrow?: boolean;
  rank?: number;
  mathscore?: number;
}

export const OptionList: React.FC<OptionListProps> = (props) => {
  const { content, onPress, hasArrow, rank, mathscore} = props;
  return (
    <Container onPress={onPress}>
      <ContentWrapper rank={Boolean(rank)}>
        {rank ? <Paragraph green italic style={{marginRight: 20}}>#{rank}</Paragraph> : null}
        <Paragraph>{content}</Paragraph>
        {hasArrow && <ArrowRightIcon />}
        <Content>
          {mathscore ? <Paragraph green italic style={{marginRight: 20}}>{mathscore}</Paragraph> : null}
        </Content> 
      </ContentWrapper>
    </Container>
  );
};