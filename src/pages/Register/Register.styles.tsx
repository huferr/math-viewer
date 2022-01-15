import styled from "styled-components/native";
import { colors } from "../../styles";

export const TopIcon = styled.Text<{green?: boolean}>`
  margin-top: 10px;
  font-size: 64px;
  font-weight: 300;
  color: ${(props) => props.green ? colors.primary : colors.white};
  text-align: center;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const TitleWrapper = styled.Text`
  flex-direction: row;
`;