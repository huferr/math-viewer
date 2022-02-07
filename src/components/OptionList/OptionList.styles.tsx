import styled from "styled-components/native";
import { colors } from "../../styles";

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  flex-direction: row;
  border-top-style: solid;
  border-top-color: ${colors.gray};
  border-top-width: 2px;
`;

export const ContentWrapper = styled.View<{rank: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: ${p => p.rank ? "flex-start" : "space-between"};
  padding: 10px 0 10px 10px;
  width: 100%;
  position: relative;
`;

export const Content = styled.View`
  position: absolute;
  right: 0;
`;

