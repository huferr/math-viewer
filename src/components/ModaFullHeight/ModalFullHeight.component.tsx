import React from "react";
import { ModalProps } from "react-native";
import { CloseIcon } from "~/assets";
import { Body, Close, Container } from "./ModalFullHeight.styles";

export const ModalFullHeight: React.FC<ModalProps> = (props) => {
  const { children, visible, onRequestClose } = props;
  return (
    <Container
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      presentationStyle="formSheet"
      {...props}
    >
      <Close onPress={onRequestClose}>
        <CloseIcon />
      </Close>
      <Body>{children}</Body>
    </Container>
  );
};