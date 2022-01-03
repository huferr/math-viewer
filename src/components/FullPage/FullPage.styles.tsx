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
  padding: 0 ${metrics.basePadding}px;
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

export const Title = styled.Text<{green?: boolean, bold?: boolean}>`
  font-size: 36px;
  font-weight: ${(props) => props.bold ? 700 : 300};
  color: ${(props) => props.green ? colors.primary : colors.white};
`;

export const ButtonContainer = styled.View<FullPageProps>`
  width: 100%;
  padding: 0px ${metrics.basePadding}px
  height: ${(props) => props.onlyOneButton ? "auto" : "120px" };
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