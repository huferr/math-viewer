import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Label, Spinner, spinnerColors } from "./Button.styles";

export interface ButtonProps extends TouchableOpacityProps { 
  type: "primary" | "secondary" | "half" | "danger";
  title?: string;
  loading?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { type = "primary", title, onPress, loading, disabled } = props;

  return (
    <ButtonContainer {...props} onPress={onPress} type={type} disabled={loading || disabled} activeOpacity={0.8}>
      {loading ? <Spinner color={spinnerColors[type]}/> : (
        <Label type={type}>
          {title}
        </Label>
      )}
    </ButtonContainer>
  );
};