import styled from "styled-components/native";
import { colors } from "../../styles";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  border-top-style: solid;
  border-top-color: ${colors.gray};
  border-top-width: 2px;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
  width: 100%;
`;

