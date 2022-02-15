import styled from "styled-components/native";
import { colors } from "~styles";

export const ProfilePicContainer = styled.View`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background-color: ${colors.primary};
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })``;