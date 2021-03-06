import styled from "styled-components/native";
import { colors, metrics } from "~/styles";
import { FullPageProps } from "./FullPage.component";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
`;

export const KeyboardAvoidingViewContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Body = styled.View`
  padding: 0 ${metrics.basePadding}px;
`;

export const ScrollViewPage = styled.ScrollView``;

export const Header = styled.View`
  padding: 10px ${metrics.basePadding}px;
`;

export const TopButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TopButton = styled.TouchableOpacity`
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

export const ButtonContainer = styled.View<FullPageProps>`
  width: 100%;
  padding: ${metrics.basePadding}px
  height: ${(props) => props.onlyOneButton ? "auto" : "160px" };
  flex-direction: column;
  justify-content: ${(props) => props.onlyOneButton ? "flex-end" : "space-between" };
`;

export const MessageContainer = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;