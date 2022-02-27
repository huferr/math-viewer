import React, { useState } from "react";
import * as Text from "~/styles/typography";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import { NavigateTo } from "~/services";
import { useAppDispatch, verifyEmailFor } from "~app";

export const ChangeEmail: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  
  const goToVerifyEmail = () => {
    NavigateTo("verify_email", navigation);
    dispatch(verifyEmailFor("change_email"));
  };

  return (
    <FullPage
      onPressGoBack={goBack} 
      whiteTitle="Change"
      greenTitle="Email"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={goToVerifyEmail}
    >
      <Text.Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Text.Subtitle green italic>new Email</Text.Subtitle>
        {" "}
        below.
      </Text.Subtitle>
      <Input type="minimal" placeholder="New email"/>

      <Modal isOpen={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <Text.Heading bold textAlign="center">Done.</Text.Heading>
        <Text.Heading green textAlign="center">your email was changed!</Text.Heading>
      </Modal>
    </FullPage>
  );
};