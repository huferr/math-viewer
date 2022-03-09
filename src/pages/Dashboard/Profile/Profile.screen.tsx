import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Option } from "~/components";
import { Button, ProfilePicContainer, UserImage } from "./Profile.styles";
import { NavigateTo } from "~/services";
import { useUser } from "~graphql/queries/useUser";
import { useUploadUserImage } from "~graphql/mutations/useUploadUserImage";
import { clearStorage } from "~services/general/storage";
import DefaultImage from "~/assets/images/userImage.png";
import ImagePicker from "react-native-image-crop-picker";

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  
  const { data: user, refetch: userRefetch } = useUser();
  const { mutateAsync: uploadImage } = useUploadUserImage();
  const [logouLoading, setlogoutLoading] = useState(false);

  const goToPage = (page: "change_email" | "change_nickname") => NavigateTo(page, navigation, {});
  
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
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    
  };

  const logout = async () => {
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
          <UserImage source={user?.imageUri !== "empty" ? { uri: user?.imageUri } : DefaultImage} />
        </Button>
      </ProfilePicContainer>
      <Option title="Nickname" content="Hugo" onPress={() => goToPage("change_nickname")}/>
      <Option title="Email" content="hugo@gmail.com" onPress={() => goToPage("change_email")}/>
    </FullPage>
  );
};
