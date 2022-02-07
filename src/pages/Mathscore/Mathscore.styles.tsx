import styled from "styled-components/native";
import { colors } from "../../styles";
import metrics from "../../styles/metrics";

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.darkerGray};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${metrics.basePadding}px; 
`;

export const MathscoreView = styled.View`
  width: 160px;
  height: 90px;
  margin-top: 20px;
  padding: ${metrics.basePadding}px;
  border: 1px solid ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const UsersRankingInfo = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UsersRank = styled.View`
  width: 45px;
`;

export const UserName = styled.View`
  width: 65%;
`;

export const UserMathscore = styled.View`
  width: 30%;
`;