import React from "react";
import { useNavigation } from "@react-navigation/core";
import { BigCircle } from "../../assets/icons";
import { FullPage, Option } from "../../components";
import { Button, ProfilePicContainer } from "./Profile.styles";
import { NavigateTo } from "../../services";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <FullPage
      onPressGoBack={goBack}
      onlyOneButton
      onPressDanger={() => {}}
      buttonDangerTitle="Exit"
    >
      <ProfilePicContainer>
        <Button>
          <BigCircle />
        </Button>
      </ProfilePicContainer>
      <Option title="Nickname" content="Hugo" onPress={() => NavigateTo("change_nickname", navigation, {})}/>
      <Option title="Email" content="hugo@gmail.com" onPress={() => {}}/>
    </FullPage>
  );
};
