import React from "react";
import { TextInputProps } from "react-native";
import { colors } from "~/styles";
import { InputField } from "./InputFormula.styles";

export const InputFormula: React.FC<TextInputProps & { inputRef?: React.RefObject<any>}> = (props) => {

  return (
    <InputField
      {...props}
      ref={props.inputRef}
      autoFocus={props.autoFocus}
      value={props.value}
      onChangeText={props.onChangeText} 
      placeholder={props.placeholder} 
      placeholderTextColor={colors.lightGray} 
      selectionColor={colors.primary}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
};