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
} from "../../components";

// mocked data
import {
  DashboardSearchOptions,
  dashboardSearchOptions,
  menuOptions
} from "../../data";

// services
import { NavigateTo } from "../../services";

// styles
import { HeadingSmall } from "../../styles";
import { ProfileIcon, SearchIcon } from "../../assets/icons";
import { Button, Card, CardWrapper, Header } from "./Dashboard.styles";

// types
import { AppPagesType } from "../../typings";

export const Dashboard: React.FC = () => {

  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();
  const goToPage = (id: AppPagesType) => NavigateTo(id, navigation, {});
  
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
        <HeadingSmall bold>
          Hello,
          {" "}
          <HeadingSmall green>Hugo</HeadingSmall>
        </HeadingSmall>
        <Button onPress={() => goToPage("profile")}>
          <ProfileIcon />
        </Button>
      </Header>

      <CardWrapper>
        <Card onPress={() => goToPage("mathscore")}>
          <HeadingSmall green>Mathscore</HeadingSmall>
          <HeadingSmall italic>9999</HeadingSmall>
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
        <HeadingSmall
          textAlign="center"
          marginTop={30}
          marginBottom={30}
          italic
          green  
        >
          What
          {" "} 
          <HeadingSmall italic>
          are you looking for?
          </HeadingSmall>
        </HeadingSmall>
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