import styled from "styled-components/native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import { FullPageProps } from "./FullPage.types";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
  padding: ${metrics.basePadding}px;
`;

export const KeyboardAvoidingViewContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Body = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const ScrollViewPage = styled.ScrollView``;

export const Header = styled.View`
padding: ${metrics.basePadding}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.Text``;

export const WhiteTitle = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.white};
`;

export const GreenTitle = styled.Text`
  font-size: 36px;
  font-weight: 300;
  color: ${colors.primary};
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${metrics.basePadding}px;
  position: absolute;
  bottom: 10px;
`;

export const ButtonContainer = styled.View<FullPageProps>`
  width: 100%;
  height: 120px;
  flex-direction: column;
  justify-content: ${(props) => props.onlyOneButton ? "flex-end" : "space-between" };
`;

export const MessageContainer = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;