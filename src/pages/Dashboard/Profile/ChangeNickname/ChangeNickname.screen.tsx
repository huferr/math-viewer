import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal } from "~/components";
import * as Text from "~/styles/typography";
import { useUser } from "~graphql/queries/useUser";
import { useUpdateNickname } from "~graphql/mutations/useUpdateNickname";

export const ChangeNickname: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const { data: user } = useUser();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [newNickame, setNewNickname] = useState(user?.name);
  const [error, setError] = useState(""); 

  const { mutateAsync: updateNickname } = useUpdateNickname();

  const handleUpdateNickname = async () => {
    try {
      if(newNickame === user?.name) return;
      else if(newNickame === "") setError("Nickname can't be empty");
      else if(String(newNickame).length < 4) setError("This nickname is too short. Minimum is 4 characters");
      else {
        await updateNickname({
          nickname: String(newNickame),
        });
        setOpenSuccessModal(true);
        setError("");
      }
    } catch (e: any) {
      if(e.message.includes("NAME_ALREADY_EXISTS")) setError("This nickname is already in use");
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
      greenTitle="Nickname"
      onlyOneButton
      buttonPrimaryTitle="Continue"
      onPressPrimary={handleUpdateNickname}
      verticalBounce={false}
    >
      <Text.Subtitle italic marginTop={50} marginBottom={50} textAlign="center">
        Enter your
        {" "}
        <Text.Subtitle green italic>new Nickname</Text.Subtitle>
        {" "}
        below.
      </Text.Subtitle>
      <Input
        type="minimal"
        placeholder="New nickname"
        errorText={error}
        value={newNickame}
        onChangeText={(n) => {
          setNewNickname(n);
          setError("");
        }}
        maxLength={12}
      />

      <Modal isOpen={openSuccessModal} onClose={onCloseModal}>
        <Text.Heading bold textAlign="center">Done.</Text.Heading>
        <Text.Heading green textAlign="center">your nickname was changed!</Text.Heading>
      </Modal>
    </FullPage>
  );
};