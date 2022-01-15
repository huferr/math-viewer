import { useNavigation } from "@react-navigation/core";
import React from "react";
import { GraphIcon, ProfileIcon, SearchIcon } from "../../assets/icons";
import { BigCard, FullPage } from "../../components";
import { NavigateTo } from "../../services";
import { HeadingSmall } from "../../styles";
import { Button, Card, CardWrapper, Header } from "./Dashboard.styles";

export const Dashboard: React.FC = () => {

  const navigation = useNavigation();
  const goToProfile = () => NavigateTo("profile", navigation, {});

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
        <Button>
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

      <BigCard 
        title="Viewer"
        subtitle="Explore functions and numbers to see what they show visually!"
        icon={<GraphIcon width={130} height={100} />}
        onPress={() => {}}
        marginBottom={20}  
      />

      <BigCard 
        title="Homeworks"
        subtitle="Explore functions and numbers to see what they show visually!"
        icon={<GraphIcon width={130} height={100} />}
        onPress={() => {}}  
      />
    </FullPage>
  );
};