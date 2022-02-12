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
  width: 100%
  height: 300px;
  border-radius: 15px;
  background-color: ${colors.mediumGray};
`;