import styled from "styled-components/native";
import { colors } from "../../styles";
import metrics from "../../styles/metrics";
import { BigCardProps } from "./BigCard.component";

export const Container = styled.View<Pick<BigCardProps, "marginBottom">>`
  width: 100%;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7})`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  background-color: ${colors.mediumGray};
  border-radius: ${metrics.baseRadius}px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const SubtitleWrapper = styled.View``;
