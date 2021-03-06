import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container  = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
`;

export const Body  = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const Lambda = styled.Text`
  font-size: 64px;
  font-weight: 300;
  transform: rotate(12deg);
  color: ${colors.white};
  opacity: 0.6;
  text-align: right;
  margin: 0 40px 20px 0;
`;

export const Title = styled.Text`
  font-size: 64px;
  font-weight: 300;
  color: ${colors.primary};
`;

export const WhiteTitle = styled.Text`
  font-size: 64px;
  font-weight: 700;
  color: ${colors.white};
`;

export const IconWrapper = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Pi = styled.Text`
font-size: 64px;
  font-weight: 300;
  transform: rotate(-12deg);
  color: ${colors.primary};
  opacity: 0.6;
  text-align: right;
  margin: 0 0 40px 30px;
`;

export const ByText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.white};
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: ${colors.primary};
`;