import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Linking, TouchableOpacity } from "react-native";
import { GraphIcon } from "../../assets/icons/graph";
import { FullPage } from "../../components";
import { NavigateTo } from "../../helpers/navigateTo";
import { IconWrapper, Lambda, Pi, Title, WhiteTitle, ByText, NameText } from "./Welcome.styles";

export const Welcome: React.FC = () => {

  const navigation = useNavigation();

  const handleFooterMessage = () => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL("https://github.com/huferr")}>
      <ByText>by{" "}<NameText>huferr</NameText>
      </ByText>
    </TouchableOpacity>
  );

  return (
    <FullPage
      buttons
      buttonPrimary
      buttonPrimaryTitle="Login"
      onPressPrimary={() => NavigateTo("login", navigation, {})}
      buttonSecondary
      buttonSecondaryTitle="Sign Up"
      onPressSecondary={() => NavigateTo("signup", navigation, {})}
      footerMessage={handleFooterMessage()}
    >
      <Lambda>λ</Lambda>
      <Title>Math{"\n"}<WhiteTitle>Viewer</WhiteTitle></Title>
      <IconWrapper>
        <Pi>π</Pi>
        <GraphIcon/>
      </IconWrapper>
    </FullPage>
  );
};