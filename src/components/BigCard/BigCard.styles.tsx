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
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  height: 150px;
  background-color: ${colors.mediumGray};
  border-radius: ${metrics.baseRadius}px;
  padding: 20px;
  position: relative;
`;

export const SubtitleWrapper = styled.View`
  width: 70%;
`;

export const IconWrapper = styled.View`
  z-index: -1;
  width: 50%;
  height: 100%;
  position: absolute;
  right: 20px;
  bottom: 20px;
  align-items: flex-end;
  justify-content: flex-end;
`;