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
  width: 190px;
  height: 40px;
  margin-top: 20px;
  border: 1px solid ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const MenuWrapper = styled.View`
  margin-top: 40px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;