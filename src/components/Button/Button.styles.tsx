
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { ButtonProps } from "./Button.component";


export const backgroundColors: Record<ButtonProps["type"], string> = {
  primary: colors.primary,
  secondary: colors.white,
  half: colors.primary,
};

export const titleColors: Record<ButtonProps["type"], string> = {
  primary: colors.white,
  secondary: colors.black,
  half: colors.white,
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => backgroundColors[props.type]};
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