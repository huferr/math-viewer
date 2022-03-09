import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";

// components
import { 
  BigCard,
  FullPage,
  Input,
  ModalFullHeight,
  OptionList
} from "~/components";

// mocked data
import {
  DashboardSearchOptions,
  dashboardSearchOptions,
  menuOptions
} from "~/data";

// services
import { NavigateTo } from "~/services";

// styles
import * as Text from "~/styles/typography";
import { ProfileIcon, SearchIcon } from "~/assets/icons";
import { Button, Card, CardWrapper, Header, UserImage, UserInfoContainer } from "./Dashboard.styles";
import DefaultImage from "~/assets/images/userImage.png";

// types
import { AppPagesType } from "~/typings";
import { useUser } from "~graphql/queries/useUser";

export const Dashboard: React.FC = () => {
  const { data: user } = useUser();
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();
  const goToPage = (pages: AppPagesType) => NavigateTo(pages, navigation, {});

  const quickSearch = (array: DashboardSearchOptions[], search: string ) => 
    array.filter((item) => item.title.toLocaleLowerCase()
      .includes(String(search.toLocaleLowerCase())));

  const onPressSearchItem = (navigateTo: string) => {
    NavigateTo(navigateTo, navigation, {});
    setOpenSearchModal(false);
  };

  const renderSearchItem = (item: DashboardSearchOptions) => 
    <OptionList hasArrow content={item.title} onPress={() => onPressSearchItem(item.navigateTo)} />;

  return (
    <FullPage>

      <Header>
        <Button onPress={() => setOpenSearchModal(true)}>
          <SearchIcon />
        </Button>
        <UserInfoContainer>
          <UserImage source={user?.imageUri !== "empty" ? { uri: user?.imageUri } : DefaultImage} />
          <Text.HeadingSmall bold>
            Hello,
            {" "}
            <Text.HeadingSmall green>{user?.name ? user?.name : "User"}</Text.HeadingSmall>
          </Text.HeadingSmall>
        </UserInfoContainer>
        <Button onPress={() => goToPage("profile")}>
          <ProfileIcon />
        </Button>
      </Header>

      <CardWrapper>
        <Card onPress={() => goToPage("mathscore")}>
          <Text.HeadingSmall green>Mathscore</Text.HeadingSmall>
          <Text.HeadingSmall italic>9999</Text.HeadingSmall>
        </Card>
      </CardWrapper>

      {menuOptions.map((item) => (
        <BigCard
          key={item.id} 
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          onPress={() => goToPage(item.id)}
          marginBottom={20}  
        />
      ))}

      <ModalFullHeight visible={openSearchModal} onRequestClose={() => setOpenSearchModal(false)}>
        <Text.HeadingSmall
          textAlign="center"
          marginTop={30}
          marginBottom={30}
          italic
          green  
        >
          What
          {" "} 
          <Text.HeadingSmall italic>
          are you looking for?
          </Text.HeadingSmall>
        </Text.HeadingSmall>
        <Input type="search" placeholder="Search" value={searchValue} onChangeText={setSearchValue} />
        <FlatList 
          data={quickSearch(dashboardSearchOptions, searchValue)}
          renderItem={(t) => renderSearchItem(t.item)}
          keyExtractor={(item) => item.title}
        />
      </ModalFullHeight>
    </FullPage>
  );
};