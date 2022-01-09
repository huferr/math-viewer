import styled from "styled-components/native";
import colors from "./colors";

interface TypographyProps {
  bold?: boolean;
  green?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export const Heading = styled.Text<TypographyProps>`
  font-size: 36px;
  font-weight: ${props => props.bold ? 700 : 300};
  color: ${props => props.green ? colors.primary : colors.white};
`;

export const Subtitle = styled.Text<TypographyProps>`
  font-size: 18px;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  color: ${props => props.green ? colors.primary : colors.white};
  font-weight: ${props => props.bold ? 700 : 300};
  text-align: center;
`;

export const Paragraph = styled.Text``;