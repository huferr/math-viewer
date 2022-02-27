import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import { Heading, Subtitle } from "~/styles";
import { NavigateTo } from "~/services";
import { useAppDispatch } from "~app/hooks";
import { verifyEmailFor } from "~app/slices/verifyEmailFor.slice";

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
      <Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Subtitle green italic>new Email</Subtitle>
        {" "}
        below.
      </Subtitle>
      <Input type="minimal" placeholder="New email"/>

      <Modal isOpen={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <Heading bold textAlign="center">Done.</Heading>
        <Heading green textAlign="center">your email was changed!</Heading>
      </Modal>
    </FullPage>
  );
};