import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import ImagePicker from "react-native-image-crop-picker";
import { FullPage, Option } from "~/components";
import { Button, ProfilePicContainer, UserImage } from "./Profile.styles";
import { NavigateTo } from "~/services";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [ imageUri, setImageUri] = useState("");
  const goToChangeNickname = () => NavigateTo("change_nickname", navigation, {});
  const goToChangeEmail = () => NavigateTo("change_email", navigation, {});
  
  const pickImage = () => ImagePicker.openPicker({
    width: 300,
    height: 400,
    mediaType: "photo",
    cropping: true,
    includeBase64: true,
  }).then(image => setImageUri(`data:${image.mime};base64,${image.data}`));
   

  return (
    <FullPage
      onPressGoBack={goBack}
      onlyOneButton
      onPressDanger={() => {}}
      buttonDangerTitle="Exit"
    >
      <ProfilePicContainer>
        <Button onPress={pickImage}>
          <UserImage source={{ uri: imageUri}} />
        </Button>
      </ProfilePicContainer>
      <Option title="Nickname" content="Hugo" onPress={goToChangeNickname}/>
      <Option title="Email" content="hugo@gmail.com" onPress={goToChangeEmail}/>
    </FullPage>
  );
};
