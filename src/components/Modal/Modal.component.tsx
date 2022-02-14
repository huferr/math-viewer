import React from "react";
import { CloseIcon } from "~/assets";
import { Body, Close, Container, SwipeCloseArea } from "./Modal.styles";
import { ModalProps as OriginalModalProps } from "react-native-modalbox";

interface ModalProps extends OriginalModalProps {
  onClose: () => void,
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, onClose, position = "center" } = props;
  return (
    <Container
      backdropPressToClose
      backButtonClose
      position={position}
      swipeArea={40}
      {...props}
      coverScreen
      backdropOpacity={0.8}
    >
      {position !== "center" && <SwipeCloseArea />}
      <Close onPress={onClose}>
        <CloseIcon />
      </Close>
      <Body>{children}</Body>
    </Container>
  );
};