import React from "react";
import { useNavigation } from "@react-navigation/core";
import { BigCircle } from "../../assets/icons";
import { FullPage, Option } from "../../components";
import { ProfilePicContainer } from "./Profile.styles";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <FullPage
      onPressGoBack={goBack}
    >
      <ProfilePicContainer>
        <BigCircle />
      </ProfilePicContainer>
      <Option />
      <Option />
    </FullPage>
  );
};
