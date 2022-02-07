import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "../../components";
import { NavigateTo } from "../../services";
import { Heading, HeadingSmall, Paragraph, Subtitle } from "../../styles";
import { InfoWrapper, MathscoreView, UserMathscore, UserName, UsersRank, UsersRankingInfo } from "./Mathscore.styles";
import { userRanking, UserRankingTypes } from "../../data/userRanking";

export const Mathscore: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 
  const [openOnboardingModal, setOpenOnboardingModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const quickSearch = (array: UserRankingTypes[], search: string ) => 
    array.filter((item) => item.user.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));

  const handleUsers = (
    quickSearch(userRanking, searchValue).map((item: UserRankingTypes) => <OptionList mathscore={item.mathscore} rank={item.position} key={item.user} content={item.user} />)
  );

  useEffect(() => {
    setTimeout(() => setOpenOnboardingModal(true), 500);
  },[]);
  
  return (
    <>
      <FullPage onPressGoBack={goBack}>
        <HeadingSmall
          green
          italic
          textAlign="center"
          marginTop={30}
        >
        Mathscore
        </HeadingSmall>
      
        <InfoWrapper>
          <MathscoreView>
            <Subtitle green>
          Mathscore
            </Subtitle>
            <Subtitle>
            9999
            </Subtitle>
          
          </MathscoreView>

          <MathscoreView>
            <Subtitle green>
          Your Position
            </Subtitle>
            <Subtitle>
            9999
            </Subtitle>
          </MathscoreView>
        </InfoWrapper>

        <HeadingSmall green marginTop={30} marginBottom={30}>Global Ranking</HeadingSmall>
        <Input placeholder="Search for users" type="search" value={searchValue} onChangeText={setSearchValue} />
        <UsersRankingInfo>
          <UsersRank>
            <Paragraph>Pos.</Paragraph>  
          </UsersRank>
          <UserName>
            <Paragraph>Nickname</Paragraph>  
          </UserName>
          <UserMathscore>
            <Paragraph>Mathscore</Paragraph>  
          </UserMathscore>
        </UsersRankingInfo>
        {handleUsers}
        
        <Modal isOpen={openOnboardingModal} onClose={() => setOpenOnboardingModal(false)}>
          <Heading bold textAlign="center">Welcome to</Heading>
          <Heading green textAlign="center">Mathscore</Heading>
          <Paragraph marginTop={20}>
            <Paragraph green>Mathscore</Paragraph>
            {" "}
            are our points. Finish some
            {" "}
            <Paragraph green>homeworks</Paragraph>
            {" "}
            to receive lots of them. Stay on top of our <Paragraph green>global ranking</Paragraph>!
          </Paragraph>
        </Modal>
      </FullPage>
    </>
  );
};
