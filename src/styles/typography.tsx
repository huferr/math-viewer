import styled from "styled-components/native";
import { colors } from "./colors";

interface TypographyProps {
  bold?: boolean;
  green?: boolean;
  italic?: boolean;
  marginTop?: number;
  marginBottom?: number;
  textAlign?: "left" | "center" | "right";
}

export const Heading = styled.Text<TypographyProps>`
  font-size: 36px;
  text-align: ${props => props.textAlign || "left"};
  font-weight: ${props => props.bold ? 700 : 300};
  color: ${props => props.green ? colors.primary : colors.white};
`;

export const HeadingSmall = styled.Text<TypographyProps>`
  font-size: 24px;
  font-weight: ${props => props.bold ? 700 : 300};
  font-style: ${props => props.italic ? "italic" : "normal"};
  text-align: ${props => props.textAlign || "left"};
  color: ${props => props.green ? colors.primary : colors.white};
`;

export const Subtitle = styled.Text<TypographyProps>`
  font-size: 18px;
  font-style: ${props => props.italic ? "italic" : "normal"};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  color: ${props => props.green ? colors.primary : colors.white};
  font-weight: ${props => props.bold ? 700 : 300};
  text-align: ${props => props.textAlign || "left"};
`;

export const Paragraph = styled.Text<TypographyProps>`
  font-size: 16px;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  font-weight: ${props => props.bold ? 700 : 300};
  font-style: ${props => props.italic ? "italic" : "normal"};
  color: ${props => props.green ? colors.primary : colors.white};
  text-align: ${props => props.textAlign || "left"};
`;