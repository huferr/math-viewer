
import Modal, { ModalProps } from "react-native-modalbox";
import styled from "styled-components/native";
import { colors } from "../../styles";
import metrics from "../../styles/metrics";

export const Container = styled(Modal)<ModalProps>`
  height: auto;
  width: ${p => p.position === "center" ? 90 : 100}%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${metrics.basePadding}px;
  padding-top: ${metrics.basePadding + 10}px;
  background-color: ${colors.mediumGray};
`;

export const SwipeCloseArea = styled.View`
  position: absolute;
  background: ${colors.lightGray};
  height: 5px;
  width: 36px;
  left: ${metrics.screenWidth / 2 - 36 / 2}px;
  top: 8px;
  border-radius: 10px;
`;

export const Close = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${colors.gray};
  height: 29px;
  width: 29px;
  right: 15px;
  top: 15px;
  border-radius: 100px;
  z-index: 1;
`;

export const Body = styled.View``;