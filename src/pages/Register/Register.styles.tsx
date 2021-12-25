import styled from "styled-components/native";
import colors from "../../styles/colors";

export const TopIcon = styled.Text<{green?: boolean}>`
  margin-top: 10px;
  font-size: 64px;
  font-weight: 300;
  color: ${(props) => props.green ? colors.primary : colors.white};
  text-align: center;
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

export const Subtitle = styled.Text`
  margin: 30px 0px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;