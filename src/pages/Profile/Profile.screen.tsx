import React from "react";
import { useNavigation } from "@react-navigation/core";
import { BigCircle } from "../../assets/icons";
import { FullPage, Option } from "../../components";
import { Button, ProfilePicContainer } from "./Profile.styles";

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
      <Option title="Nickname" content="Hugo" onPress={() => {}}/>
      <Option title="Email" content="hugo@gmail.com" onPress={() => {}}/>
    </FullPage>
  );
};
