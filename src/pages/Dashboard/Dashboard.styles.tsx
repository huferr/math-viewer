import styled from "styled-components/native";
import { colors } from "~styles";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardWrapper = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Card = styled.TouchableOpacity`
  align-items: center;
  width: 150px;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-right: 10px;
  background-color: ${colors.primary};
`;