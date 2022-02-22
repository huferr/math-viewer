import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import ImagePicker from "react-native-image-crop-picker";
import { FullPage, Option } from "~/components";
import { Button, ProfilePicContainer, UserImage } from "./Profile.styles";
import { NavigateTo } from "~/services";
import DefaultImage from "~/assets/images/userImage.png";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const [image, setImage] = useState(DefaultImage);
  const [error, setError] = useState("");
  const goToChangeNickname = () => NavigateTo("change_nickname", navigation, {});
  const goToChangeEmail = () => NavigateTo("change_email", navigation, {});
  
  const pickImage = async () => {
    try {
      const req = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        waitAnimationEnd: true,
        mediaType: "photo",
        cropperCircleOverlay: true,
        includeBase64: true,
      });
      setImage({ uri: `data:${req.mime};base64,${req.data}`});
    } catch (error: any) {
      setError(error);
    }
    
  };
   

  return (
    <FullPage
      onPressGoBack={goBack}
      onlyOneButton
      onPressDanger={() => {}}
      buttonDangerTitle="Exit"
    >
      
      <ProfilePicContainer>
        <Button onPress={pickImage}>
          <UserImage source={image} />
        </Button>
      </ProfilePicContainer>

      <Option title="Nickname" content="Hugo" onPress={goToChangeNickname}/>
      <Option title="Email" content="hugo@gmail.com" onPress={goToChangeEmail}/>
    </FullPage>
  );
};
