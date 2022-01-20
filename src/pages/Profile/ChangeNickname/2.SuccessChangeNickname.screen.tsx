import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "../../../services";
import { Heading } from "../../../styles";
import { Content, TitleWrapper } from "./ChangeNickname.styles";

export const SuccessChangeNickname: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      NavigateTo("profile", navigation, {});
    }, 3000);
  }, []);

  return (
    <Content>
      <Heading bold>Done.</Heading>
      <TitleWrapper>
        <Heading green textAlign="center">your nickname was changed!</Heading>
      </TitleWrapper>
    </Content>
  );
};