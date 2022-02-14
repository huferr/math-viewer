import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Linking, TouchableOpacity } from "react-native";
import { GraphIcon } from "~/assets";
import { FullPage } from "~/components";

import {
  IconWrapper,
  Lambda,
  Pi,
  Title,
  WhiteTitle,
  ByText,
  NameText
} from "./Welcome.styles";
import { NavigateTo } from "../../services";

export const Welcome: React.FC = () => {

  const navigation = useNavigation();

  const handleFooterMessage = (
    <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL("https://hugoferreira.dev/")}>
      <ByText>by{" "}<NameText>huferr</NameText>
      </ByText>
    </TouchableOpacity>
  );

  return (
    <FullPage
      buttonPrimaryTitle="Login"
      onPressPrimary={() => NavigateTo("login", navigation, {})}
      buttonSecondaryTitle="Sign Up"
      onPressSecondary={() => NavigateTo("signup", navigation, {})}
      footerMessage={handleFooterMessage}
      verticalBounce={false}
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