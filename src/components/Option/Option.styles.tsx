import styled from "styled-components/native";
import { colors } from "../../styles";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  height: 80px;
  border-top-style: solid;
  border-top-color: ${colors.gray};
  border-top-width: 2px;
`;