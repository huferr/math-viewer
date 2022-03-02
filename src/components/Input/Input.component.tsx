import React from "react";
import { TextInputProps } from "react-native";
import { TinyCloseIcon, SearchIcon } from "~/assets";
import { colors } from "~/styles";
import { 
  CloseButton,
  Container,
  ErrorContainer,
  ErrorText,
  IconContainer,
  InputContainer,
  InputField
} from "./input.styles";
import * as Text from "~/styles/typography";

export interface InputProps extends TextInputProps {
  type: "primary" | "minimal" | "search",
  label?: string,
  placeholder?: string,
  errorText?: string,
}

export const Input: React.FC<InputProps> = (props) => {
  const { style, placeholder, errorText, type, value, label, onChangeText, autoFocus, secureTextEntry } = props;

  return (
    <Container style={style}>
      {label ? <Text.Paragraph marginBottom={10} green>{label}</Text.Paragraph> : null}
      <InputContainer type={type}>
        {type === "search" &&
        <IconContainer>
          <SearchIcon stroke={colors.lightGray}/>
        </IconContainer>
        }
       
        <InputField
          autoFocus={autoFocus}
          value={value}
          onChangeText={onChangeText} 
          type={type}
          placeholder={placeholder} 
          placeholderTextColor={colors.lightGray} 
          selectionColor={colors.primary}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
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