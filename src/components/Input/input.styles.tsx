import styled, { css } from "styled-components/native";
import { colors } from "../../styles";
import { InputProps } from "./Input.component";

const backgroundColors: Record<InputProps["type"], string> = {
  primary: colors.gray,
  minimal: colors.transparent,
  search: colors.gray,
};

const paddingLeft: Record<InputProps["type"], number> = {
  primary: 15,
  minimal: 5,
  search: 0,
};

const mininalInput = css`
  border-style: solid;
  border-bottom-color: ${colors.gray};
  border-bottom-width: 2px;
`;

export const Container = styled.View`
  width: 100%;
`;

export const IconContainer = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View<InputProps>`
  width: 100%;
  flex-direction: row;
  background-color: ${(p) => backgroundColors[p.type]};
  border-radius: ${(p) => p.type === "minimal" ? 0 : 12}px;
`;

export const InputField = styled.TextInput<InputProps>`
  width: ${p => p.type === "search" ? 75 : 100}%;
  height: 50px;
  padding-left: ${(p) => paddingLeft[p.type]}px;
  padding-right: ${(p) => paddingLeft[p.type]}px;
  font-size: 16px;
  color: ${colors.white};
  ${(p) => p.type === "minimal" && mininalInput};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  justify-content: center;
  align-items: center;
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