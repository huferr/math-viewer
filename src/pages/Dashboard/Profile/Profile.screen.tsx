import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import ImagePicker from "react-native-image-crop-picker";
import { FullPage, Option } from "~/components";
import { Button, ProfilePicContainer, UserImage } from "./Profile.styles";
import { NavigateTo } from "~/services";
import DefaultImage from "~/assets/images/userImage.png";
import { useUser } from "~graphql/queries/useUser";
import { useUploadUserImage } from "~graphql/mutations/useUploadUserImage";
import { clearStorage } from "~services/general/storage";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { data: user, refetch: userRefetch } = useUser();
  const { mutateAsync: uploadImage } = useUploadUserImage();
  const goBack = () => navigation.goBack();
  const [image, setImage] = useState(user?.imageUri);
  const [error, setError] = useState("");
  const [ logouLoading, setlogoutLoading ] = useState(false);
  const goToChangeNickname = () => NavigateTo("change_nickname", navigation, {});
  const goToChangeEmail = () => NavigateTo("change_email", navigation, {});
  
  const pickImage = async () => {
    try {
      const req = await ImagePicker.openPicker({
        mediaType: "photo",
        cropperCircleOverlay: true,
        includeBase64: true,
      });

      await uploadImage({
        imageUri: `data:${req.mime};base64,${req.data}`
      });
      setImage(`data:${req.mime};base64,${req.data}`);
    } catch (error: any) {
      setError(error);
    }
    
  };

  const logout = () => {
    setlogoutLoading(true);
    setTimeout(async () => {
      await clearStorage();
      await userRefetch();
    }, 2000);
      
  };

  return (
    <FullPage
      onPressGoBack={goBack}
      onlyOneButton
      onPressDanger={logout}
      loadingDangerBtn={logouLoading}
      buttonDangerTitle="Exit"
    >
      
      <ProfilePicContainer>
        <Button onPress={pickImage}>
          <UserImage source={user?.imageUri ? { uri: image} : DefaultImage} />
        </Button>
      </ProfilePicContainer>

      <Option title="Nickname" content="Hugo" onPress={goToChangeNickname}/>
      <Option title="Email" content="hugo@gmail.com" onPress={goToChangeEmail}/>
    </FullPage>
  );
};
