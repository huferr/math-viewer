import React from "react";
import { useNavigation } from "@react-navigation/core";
import { ProfileIcon, SearchIcon } from "../../assets/icons";
import { BigCard, FullPage } from "../../components";
import { menuOptions } from "../../data";
import { NavigateTo } from "../../services";
import { HeadingSmall } from "../../styles";
import { Button, Card, CardWrapper, Header } from "./Dashboard.styles";

export const Dashboard: React.FC = () => {

  const navigation = useNavigation();
  const goToProfile = () => NavigateTo("profile", navigation, {});
  const goToSearch = () => NavigateTo("search", navigation, {});

  const chooseMenu = (id: string) => {
    // if (id === "viewer") console.log("viewer");
    // if (id === "homeworks") console.log("homeworks");
  };

  const HelloUser = (
    <HeadingSmall bold>
      Hello,
      {" "}
      <HeadingSmall green>Hugo</HeadingSmall>
    </HeadingSmall>
  );

  return (
    <FullPage>

      <Header>
        <Button onPress={goToSearch}>
          <SearchIcon />
        </Button>
        {HelloUser}
        <Button onPress={goToProfile}>
          <ProfileIcon />
        </Button>
      </Header>

      <CardWrapper>
        <Card>
          <HeadingSmall green italic>Homeworks</HeadingSmall>
          <HeadingSmall italic>99/99</HeadingSmall>
        </Card>
        <Card>
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
          onPress={() => chooseMenu(item.id)}
          marginBottom={20}  
        />
      ))}
    </FullPage>
  );
};