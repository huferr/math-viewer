import styled from "styled-components/native";
import { colors } from "~/styles";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;
  border-top-style: solid;
  border-top-color: ${colors.gray};
  border-top-width: 2px;
`;

export const ContentWrapper = styled.View``;

export const IconWrapper = styled.View`
  justify-content: flex-end;
`;