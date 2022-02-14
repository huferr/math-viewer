import styled from "styled-components/native";
import { colors } from "~/styles";

export const TopIcon = styled.Text<{green?: boolean}>`
  margin-top: 10px;
  font-size: 64px;
  font-weight: 300;
  color: ${(props) => props.green ? colors.primary : colors.white};
  text-align: center;
`;

export const Subtitle = styled.Text`
  margin: 30px 0px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.darkerGray};
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const Title = styled.Text<{green?: boolean, bold?: boolean}>`
  text-align: center;
  font-size: 36px;
  font-weight: ${(props) => props.bold ? 700 : 300};
  color: ${(props) => props.green ? colors.primary : colors.white};
`;