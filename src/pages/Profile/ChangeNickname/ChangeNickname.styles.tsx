import styled from "styled-components/native";
import { colors } from "../../../styles";
import metrics from "../../../styles/metrics";

export const Content = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const TitleWrapper = styled.Text`
  flex-direction: row;
  padding: 0 ${metrics.basePadding}px;
`;