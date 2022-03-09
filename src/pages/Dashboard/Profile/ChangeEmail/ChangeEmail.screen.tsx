import React, { useState } from "react";
import * as Text from "~/styles/typography";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import { useUser } from "~graphql/queries/useUser";
import { useUpdateEmail } from "~graphql/mutations/useUpdateEmail";

export const ChangeEmail: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const { data: user } = useUser();
  const { mutateAsync: updateEmail } = useUpdateEmail();

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [newEmail, setNewEmail] = useState(user?.email);
  const [error, setError] = useState("");
  
  const handleUpdateEmail = async () => {
    try {
      if(newEmail === user?.email) return;
      else if(newEmail === "") setError("Email can't be empty");
      else {
        await updateEmail({
          email: String(newEmail),
        });
        setOpenSuccessModal(true);
        setError("");
      }
    } catch (e: any) {
      if(e.message.includes("EMAIL_ALREADY_EXISTS")) setError("This email has already been registred");
      if(e.message.includes("INVALID_EMAIL")) setError("This isn't a valid email");
    }
  };

  const onCloseModal = () => {
    setOpenSuccessModal(false);
    setTimeout(() => {
      goBack();
    }, 600);
  };

  return (
    <FullPage
      onPressGoBack={goBack} 
      whiteTitle="Change"
      greenTitle="Email"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={handleUpdateEmail}
      verticalBounce={false}
    >
      <Text.Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Text.Subtitle green italic>new Email</Text.Subtitle>
        {" "}
        below.
      </Text.Subtitle>
      <Input
        type="minimal"
        placeholder="New email"
        value={newEmail}
        onChangeText={(e) => {
          setNewEmail(e);
          setError("");
        }}
        errorText={error}
      />

      <Modal isOpen={openSuccessModal} onClose={onCloseModal}>
        <Text.Heading bold textAlign="center">Done.</Text.Heading>
        <Text.Heading green textAlign="center">your email was changed!</Text.Heading>
      </Modal>
    </FullPage>
  );
};
