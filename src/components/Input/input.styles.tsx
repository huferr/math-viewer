import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 100%;
  background-color: ${colors.gray};
  border-radius: 12px;
`;

export const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 15px;
  font-size: 16px;
  color: ${colors.white};
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