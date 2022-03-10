import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "~/components";
import { NavigateTo } from "~/services";
import * as Text from "~/styles/typography";
import { InfoWrapper, MathscoreView, UserMathscore, UserName, UsersRank, UsersRankingInfo } from "./Mathscore.styles";
import { userRanking, UserRankingTypes } from "~/data";
import { useAppDispatch, useAppSelector } from "~app/hooks";
import { mathscoreModal, selectModalState } from "~app/slices/InfoModal.slice";
import { useUser } from "~graphql/queries/useUser";

export const Mathscore: React.FC = () => {

  const isOpenModal = useAppSelector(state => selectModalState(state).isMathscoreModalOpen);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 

  const { data: user } = useUser();
  const [searchValue, setSearchValue] = useState("");

  const quickSearch = (array: UserRankingTypes[], search: string ) => 
    array.filter((item) => item.user.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));

  const handleUsers = (
    quickSearch(userRanking, searchValue).map((item: UserRankingTypes) => <OptionList mathscore={item.mathscore} rank={item.position} key={item.user} content={item.user} />)
  );

  
  return (
    <>
      <FullPage onPressGoBack={goBack}>
        <Text.HeadingSmall
          green
          italic
          textAlign="center"
          marginTop={30}
        >
        Mathscore
        </Text.HeadingSmall>
      
        <InfoWrapper>
          <MathscoreView>
            <Text.Subtitle green>
          Mathscore
            </Text.Subtitle>
            <Text.Subtitle italic>
              {user?.mathscore}
            </Text.Subtitle>
          
          </MathscoreView>

          <MathscoreView>
            <Text.Subtitle green>
          Your Position
            </Text.Subtitle>
            <Text.Subtitle italic>
            9999
            </Text.Subtitle>
          </MathscoreView>
        </InfoWrapper>

        <Text.HeadingSmall green marginTop={30} marginBottom={30}>Global Ranking</Text.HeadingSmall>
        <Input placeholder="Search for users" type="search" value={searchValue} onChangeText={setSearchValue} />
        <UsersRankingInfo>
          <UsersRank>
            <Text.Paragraph>Pos.</Text.Paragraph>  
          </UsersRank>
          <UserName>
            <Text.Paragraph>Nickname</Text.Paragraph>  
          </UserName>
          <UserMathscore>
            <Text.Paragraph>Mathscore</Text.Paragraph>  
          </UserMathscore>
        </UsersRankingInfo>
        
        {handleUsers}
        
        <Modal isOpen={isOpenModal} onClose={() => dispatch(mathscoreModal(false))}>
          <Text.Heading bold textAlign="center">Welcome to</Text.Heading>
          <Text.Heading green textAlign="center">Mathscore</Text.Heading>
          <Text.Paragraph marginTop={20}>
            <Text.Paragraph green>Mathscore</Text.Paragraph>
            {" "}
            are our points. Finish some
            {" "}
            <Text.Paragraph green>homeworks</Text.Paragraph>
            {" "}
            to receive lots of them. Stay on top of our <Text.Paragraph green>global ranking</Text.Paragraph>!
          </Text.Paragraph>
        </Modal>
      </FullPage>
    </>
  );
};
