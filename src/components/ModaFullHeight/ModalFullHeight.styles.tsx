import { Modal, ModalProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles";
import metrics from "../../styles/metrics";

export const Container = styled(Modal)<ModalProps>`
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${metrics.basePadding}px;
  padding-top: ${metrics.basePadding + 10}px;
  background-color: ${colors.mediumGray};
`;

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

export const Body = styled.View``;