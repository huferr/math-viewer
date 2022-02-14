import styled from "styled-components/native";
import { colors } from "~/styles";

export const InputField = styled.TextInput`
  width: 65px;
  height: 30px;
  font-size: 16px;
  background-color: ${colors.gray};
  border-radius: 12px;
  padding: 0 12px;
  color: ${colors.white};
`;