import React from "react";
import { ArrowRightIcon } from "~/assets";
import * as Text from "~/styles/typography";
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
        {rank ? <Text.Paragraph green italic style={{marginRight: 20}}>#{rank}</Text.Paragraph> : null}
        <Text.Paragraph>{content}</Text.Paragraph>
        {hasArrow && <ArrowRightIcon />}
        <Content>
          {mathscore ? <Text.Paragraph green italic style={{marginRight: 20}}>{mathscore}</Text.Paragraph> : null}
        </Content> 
      </ContentWrapper>
    </Container>
  );
};