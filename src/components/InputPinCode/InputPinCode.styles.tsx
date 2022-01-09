import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import colors from "../../styles/colors";
import { InputPinCodeProps } from "./InputPinCode.component";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
  position: relative;
`;

export const Spinner = styled(ActivityIndicator).attrs({ size: "small", color: colors.primary })`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Value = styled.Text<Pick<InputPinCodeProps, "secure">>`
  text-align: center;
  font-size: ${(p) => (p.secure ? 30 : 15)}px;
  color: ${colors.primary};
  width: 100%;
`;

export const Indicator = styled.View<{color?: string}>`
  width: 22px;
  height: 2px;
  background-color: ${(props) => props.color ? props.color : colors.primary};
  bottom: 3px;
  border-radius: 2px;
  position: absolute;
`;

export const Feedback = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;

export const SpinnerAndroid = styled(ActivityIndicator).attrs({ size: "small", color: colors.primary })`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Hiddeninput = styled.TextInput`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
`;
export const KeyView = styled.View<Pick<InputPinCodeProps, "loading">>`
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  width: 42px;
  height: 60px;
  border-radius: 10px;
  font-size: 15px;
  color: ${colors.black};
  letter-spacing: 0.4px;
  opacity: ${(p) => (p.loading ? 0.2 : 1)};
`;

export const Pressable = styled.Pressable`
  flex-direction: row;
`;

export const ErrorText = styled.Text`
  font-size: 13px;
  margin-top: 15px;
  letter-spacing: 0.4px;
  line-height: 15.6px;
  text-align: center;
  color: ${colors.danger};
`;