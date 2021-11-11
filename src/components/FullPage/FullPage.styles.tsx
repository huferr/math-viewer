import styled from "styled-components/native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.darkerGray};
`;

export const Body = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const Header = styled.View`
  
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

export const Title = styled.Text`
  font-size: 36px;
  color: white;
`;