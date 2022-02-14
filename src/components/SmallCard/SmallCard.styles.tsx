import styled, { css } from "styled-components/native";
import { colors, Paragraph, Subtitle, metrics } from "~/styles";
import { SmallCardProps } from "./SmallCard.component";

export const Container = styled.View<Pick<SmallCardProps, "marginBottom">>`
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const Content = styled.TouchableOpacity.attrs({activeOpacity: 0.7})<Pick<SmallCardProps, "disabled">>`
  flex-direction: row;
  margin-top: 10px;
  width: 160px;
  height: 120px;
  background-color: ${colors.mediumGray};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  box-shadow: 0px 4px 3px #0000003e;

  ${(p) => p.disabled && css`
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled(Subtitle)<Pick<SmallCardProps, "disabled">>`
  color: ${(p) => p.disabled ? colors.white : colors.primary}
  opacity: ${(p) => p.disabled ? 0.5 : 1};
`;

export const Text = styled(Paragraph)<Pick<SmallCardProps, "disabled">>`
  font-size: ${(p) => p.disabled ? 20 : 16}px;
`;