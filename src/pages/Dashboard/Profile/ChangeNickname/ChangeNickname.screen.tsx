import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import { Heading, Subtitle } from "~/styles";

export const ChangeNickname: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  
  return (
    <FullPage
      onPressGoBack={goBack}
      whiteTitle="Change"
      greenTitle="Nickname"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={() => setOpenSuccessModal(true)}
      verticalBounce={false}
    >
      <Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Subtitle green italic>new Nickname</Subtitle>
        {" "}
        below.
      </Subtitle>
      <Input type="minimal" placeholder="New nickname"/>

      <Modal isOpen={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <Heading bold textAlign="center">Done.</Heading>
        <Heading green textAlign="center">your nickname was changed!</Heading>
      </Modal>
    </FullPage>
  );
};