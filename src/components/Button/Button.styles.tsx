
import styled from "styled-components/native";
import { colors } from "../../styles";
import { ButtonProps } from "./Button.component";


export const backgroundColors: Record<ButtonProps["type"], string> = {
  primary: colors.primary,
  secondary: colors.white,
  half: colors.primary,
  danger: colors.danger,
};

export const titleColors: Record<ButtonProps["type"], string> = {
  primary: colors.white,
  secondary: colors.black,
  half: colors.white,
  danger: colors.danger,
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.type !== "danger" ? backgroundColors[props.type] : "transparent"};
  border: ${props => props.type === "danger" ? `2px ${colors.danger}` : null};
  height: 45px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<ButtonProps>`
  color: ${(props) => titleColors[props.type]};
  font-size: 16px;
  font-weight: 700;
`;

export const Spinner = styled.ActivityIndicator``;