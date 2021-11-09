import React from "react";
import { ButtonContainer, Label } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  const { type = "primary", title, onPress } = props;

  return (
    <ButtonContainer {...props} onPress={onPress} type={type} activeOpacity={0.8}>
      <Label type={type}>
        {title}
      </Label>
    </ButtonContainer>
  );
};