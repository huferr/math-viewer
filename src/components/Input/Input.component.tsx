import React from "react";
import { TextInputProps } from "react-native";
import { TinyCloseIcon, SearchIcon } from "../../assets/icons";
import { colors } from "../../styles";
import { 
  CloseButton,
  Container,
  ErrorContainer,
  ErrorText,
  IconContainer,
  InputContainer,
  InputField
} from "./input.styles";

export interface InputProps extends TextInputProps {
  type: "primary" | "minimal" | "search",
  placeholder?: string,
  errorText?: string,
}

export const Input: React.FC<InputProps> = (props) => {
  const { style, placeholder, errorText, type, value, onChangeText } = props;

  return (
    <Container style={style}>
      <InputContainer type={type}>
        {type === "search" &&
        <IconContainer>
          <SearchIcon stroke={colors.lightGray}/>
        </IconContainer>
        }
        <InputField
          value={value}
          onChangeText={onChangeText} 
          type={type}
          placeholder={placeholder} 
          placeholderTextColor={colors.lightGray} 
          selectionColor={colors.primary}
        />
        {type === "search" &&       
          <CloseButton onPress={() => onChangeText && onChangeText("")}>
            <TinyCloseIcon />
          </CloseButton>
        }
      </InputContainer>
      <ErrorContainer>
        {errorText ? <ErrorText>{errorText}</ErrorText> : null}
      </ErrorContainer>
    </Container>  
  );
};