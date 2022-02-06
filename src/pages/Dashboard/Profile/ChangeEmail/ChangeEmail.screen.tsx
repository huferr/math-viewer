import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "../../../../components";
import { Heading, Subtitle } from "../../../../styles";
import { NavigateTo } from "../../../../services";

export const ChangeEmail: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  
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

      <Modal isOpen={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <Heading bold textAlign="center">Done.</Heading>
        <Heading green textAlign="center">your email was changed!</Heading>
      </Modal>
    </FullPage>
  );
};