import { Modal, ModalProps } from "react-native";
import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled(Modal)<ModalProps>``;

export const Close = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${colors.gray};
  height: 27px;
  width: 27px;
  right: 15px;
  top: 15px;
  border-radius: 100px;
  z-index: 1;
`;

export const Body = styled.View`
  height: 100%;
  background-color: ${colors.darkerGray};
  padding: ${metrics.basePadding}px;
  padding-top: ${metrics.basePadding + 10}px;
`;