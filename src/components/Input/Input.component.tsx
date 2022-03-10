import React from "react";
import { TextInput, TextInputProps } from "react-native";
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
  inputRef?: React.Ref<TextInput>
}

export const Input: React.FC<InputProps> = (props) => {
  const {textContentType, onSubmitEditing, inputRef, style, placeholder, errorText, type, value, label, onChangeText, autoFocus, secureTextEntry, maxLength } = props;

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
          ref={inputRef}
          type={type}
          autoFocus={autoFocus}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText} 
          placeholder={placeholder} 
          placeholderTextColor={colors.lightGray} 
          selectionColor={colors.primary}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          textContentType={textContentType}
          maxLength={maxLength}
          returnKeyType="done"
          blurOnSubmit={false}
          errorText={errorText}
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