import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Content = styled.SafeAreaView`
  flex: 1;
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

export const TitleWrapper = styled.Text`
  flex-direction: row;
`;

