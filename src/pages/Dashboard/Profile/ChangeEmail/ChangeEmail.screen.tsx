import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input } from "../../../../components";
import { Subtitle } from "../../../../styles";
import { NavigateTo } from "../../../../services";

export const ChangeEmail: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const goToVerifyEmail = () => NavigateTo("verifyEmail", navigation, { isToSuccessChangeEmail: true });

  return (
    <FullPage
      onPressGoBack={goBack} 
      whiteTitle="Change"
      greenTitle="Email"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToVerifyEmail}
      verticalBounce={false}
    >
      <Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Subtitle green italic>new Email</Subtitle>
        {" "}
        below.
      </Subtitle>
      <Input type="minimal" placeholder="New email"/>
    </FullPage>
  );
};