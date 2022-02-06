import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Label, Spinner } from "./Button.styles";

export interface ButtonProps extends TouchableOpacityProps { 
  type: "primary" | "secondary" | "half" | "danger";
  title?: string;
  loading?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { type = "primary", title, onPress, loading } = props;

  return (
    <ButtonContainer {...props} onPress={onPress} type={type} activeOpacity={0.8}>
      <Label type={type}>
        {loading ? <Spinner /> : title}
      </Label>
    </ButtonContainer>
  );
};