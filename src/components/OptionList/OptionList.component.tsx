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
  rankList?: boolean;
}

export const OptionList: React.FC<OptionListProps> = (props) => {
  const { content, onPress, hasArrow, rank, mathscore, rankList} = props;
  return (
    <Container onPress={onPress}>
      <ContentWrapper rank={Boolean(rank)}>
        {rank ? <Text.Paragraph green italic style={{marginRight: 20}}>#{rank}</Text.Paragraph> : null}
        <Text.Paragraph>{content}</Text.Paragraph>
        {hasArrow && <ArrowRightIcon />}

        {rankList && (
          <Content>
            <Text.Paragraph green italic style={{marginRight: 20}}>{mathscore ? mathscore : 0}</Text.Paragraph>
          </Content> 
        )}
        
      </ContentWrapper>
    </Container>
  );
};