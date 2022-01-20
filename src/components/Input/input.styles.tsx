import styled, { css } from "styled-components/native";
import { colors } from "../../styles";
import { InputProps } from "./Input.component";

const backgroundColors: Record<InputProps["type"], string> = {
  primary: colors.gray,
  minimal: colors.transparent,
};

const mininalInput = css`
  border-style: solid;
  border-bottom-color: ${colors.gray};
  border-bottom-width: 2px;
`;

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<InputProps>`
  width: 100%;
  background-color: ${(props) => backgroundColors[props.type]};
  border-radius: ${(props) => props.type === "minimal" ? 0 : 12}px;
`;

export const InputField = styled.TextInput<InputProps>`
  width: 100%;
  height: ${(props) => props.type === "minimal" ? 35 : 50}px;
  padding-left: ${(props) => props.type === "minimal" ? 5 : 15}px;
  font-size: 16px;
  color: ${colors.white};
  ${(props) => props.type === "minimal" && mininalInput};
`;

export const ErrorContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 25px;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: ${colors.danger};
`;