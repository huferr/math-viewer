import styled from "styled-components/native";
import colors from "../../../styles/colors";

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