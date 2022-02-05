import styled from "styled-components/native";
import { colors } from "../../styles";
import metrics from "../../styles/metrics";
import { SmallCardProps } from "./SmallCard.component";

export const Container = styled.View<Pick<SmallCardProps, "marginBottom">>`
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7})`
  flex-direction: row;
  margin-top: 10px;
  width: 160px;
  height: 120px;
  background-color: ${colors.mediumGray};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  box-shadow: 0px 4px 3px #0000003e;
`;