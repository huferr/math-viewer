import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../styles";
import { Container, ErrorContainer, ErrorText, InputContainer, InputField } from "./input.styles";

export interface InputProps {
  type: "primary" | "minimal",
  style?: StyleProp<ViewStyle>,
  placeholder?: string,
  errorText?: string,
}

export const Input: React.FC<InputProps> = (props) => {
  const { style, placeholder, errorText, type } = props;

  return (
    <Container style={style}>
      <InputContainer type={type}>
        <InputField 
          type={type}
          placeholder={placeholder} 
          placeholderTextColor={colors.lightGray} 
          selectionColor={colors.primary}
        />
      </InputContainer>
      <ErrorContainer>
        {errorText ? <ErrorText>{errorText}</ErrorText> : null}
      </ErrorContainer>
    </Container>  
  );
};