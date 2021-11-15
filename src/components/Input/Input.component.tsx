import React from "react";
import colors from "../../styles/colors";
import { Container, ErrorContainer, ErrorText, InputContainer, InputField } from "./input.styles";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = (props) => {
  const { style, placeholder, errorText } = props;

  return (
    <Container style={style}>
      <InputContainer>
        <InputField 
          placeholder={placeholder} 
          placeholderTextColor={colors.lightGray} 
          selectionColor={colors.primary}
        />
      </InputContainer>
      <ErrorContainer>
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </ErrorContainer>
    </Container>  
  );
};