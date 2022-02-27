import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import * as Text from "~/styles/typography";

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
      <Text.Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Text.Subtitle green italic>new Nickname</Text.Subtitle>
        {" "}
        below.
      </Text.Subtitle>
      <Input type="minimal" placeholder="New nickname"/>

      <Modal isOpen={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <Text.Heading bold textAlign="center">Done.</Text.Heading>
        <Text.Heading green textAlign="center">your nickname was changed!</Text.Heading>
      </Modal>
    </FullPage>
  );
};