import styled from "styled-components/native";
import { colors } from "../../styles";

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

export const ViewerContent = styled.View`
  margin-top: 20px;
  padding: 20px;
  height: 350px;
  border-radius: 15px;
  background-color: ${colors.mediumGray};
  position: relative;
`;

export const ViewerInfo = styled.View`
  position: absolute;
  padding: 20px;
  z-index: 99;
`;

export const AnimViewer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;