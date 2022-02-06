import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { ProfileIcon, SearchIcon } from "../../assets/icons";
import { BigCard, FullPage, Input, ModalFullHeight, OptionList } from "../../components";
import { menuOptions } from "../../data";
import { NavigateTo } from "../../services";
import { HeadingSmall } from "../../styles";
import { Button, Card, CardWrapper, Header } from "./Dashboard.styles";
import { FlatList } from "react-native";
import { DashboardSearchOptions, dashboardSearchOptions } from "../../data/searchOptions";
import { AppPagesType } from "../../typings/pages";

export const Dashboard: React.FC = () => {

  const navigation = useNavigation();
  const goToPage = (id: AppPagesType) => NavigateTo(id, navigation, {});
  
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  

  const quickSearch = (array: DashboardSearchOptions[], search: string ) => 
    array.filter((item) => item.title.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));


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
        <Card onPress={() => goToPage("homeworks")}>
          <HeadingSmall green italic>Homeworks</HeadingSmall>
          <HeadingSmall italic>99/99</HeadingSmall>
        </Card>
        <Card onPress={() => goToPage("mathscore")}>
          <HeadingSmall green italic>Mathscore</HeadingSmall>
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