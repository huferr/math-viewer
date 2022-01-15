import styled from "styled-components/native";
import { colors } from "../../styles";

export const Pi  = styled.Text`
  margin-top: 10px;
  font-size: 64px;
  font-weight: 300;
  text-align: center;
  color: ${colors.primary};
`;

export const FooterMessage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PhraseText = styled.Text`
  color: ${colors.white};
  font-style: italic;
  font-weight: 700;
  font-size: 11.2px;
`;
export const AuthorText = styled.Text`
  margin-top: 10px;
  color: ${colors.white};
  font-style: italic;
  font-size: 12px;
  align-self: flex-end;
`;