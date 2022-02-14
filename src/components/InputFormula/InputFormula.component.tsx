import React from "react";
import { TextInputProps } from "react-native";
import { colors } from "~/styles";
import { InputField } from "./InputFormula.styles";

export const InputFormula: React.FC<TextInputProps> = ({
  placeholder, value, onChangeText, autoFocus
}) => {
  return (
    <InputField
      autoFocus={autoFocus}
      value={value}
      onChangeText={onChangeText} 
      placeholder={placeholder} 
      placeholderTextColor={colors.lightGray} 
      selectionColor={colors.primary}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
};