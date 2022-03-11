import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "~/components";
import { NavigateTo } from "~/services";
import * as Text from "~/styles/typography";
import { InfoWrapper, MathscoreView, RankScroll, UserMathscore, UserName, UsersRank, UsersRankingInfo } from "./Mathscore.styles";
import { userRanking, UserRankingTypes } from "~/data";
import { useAppDispatch, useAppSelector } from "~app/hooks";
import { mathscoreModal, selectModalState } from "~app/slices/InfoModal.slice";
import { useUser } from "~graphql/queries/useUser";
import { useMathscoreRank, UserListType } from "~graphql/queries/useMathscoreRank";
import { ScrollView } from "react-native";

export const Mathscore: React.FC = () => {

  const isOpenModal = useAppSelector(state => selectModalState(state).isMathscoreModalOpen);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 

  const { data: user } = useUser();
  const { data: usersList } = useMathscoreRank();
  const [searchValue, setSearchValue] = useState("");


  const matchUserPos = usersList?.find(({ name }) => name === user?.name );

  const CurrentUser = <OptionList mathscore={matchUserPos?.mathscore} rank={matchUserPos?.position} content={String(matchUserPos?.name)} />;

  const UserListWithoutCurrUser = usersList?.filter(({ name }) => name !== user?.name);

  const quickSearch = (array: UserListType[], search: string ) => 
    array.filter((item) => item.name.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));

  const handleUsers = (
    quickSearch(UserListWithoutCurrUser || [], searchValue).map((user: UserListType) => <OptionList mathscore={user.mathscore} rank={user.position} key={user.position} content={user.name} />)
  );

  const showUsersAmount = Number(usersList?.length) < 10 ? `0${usersList?.length}` : usersList?.length;
  const showUserPosition = String(matchUserPos?.position).length < 10 ? `0${String(matchUserPos?.position)}` : matchUserPos?.position;

  return (
    <>
      <FullPage onPressGoBack={goBack} verticalBounce={false}>
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
              {showUserPosition}/{showUsersAmount}
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
        {CurrentUser}
        <RankScroll>
          {handleUsers}
        </RankScroll>
        
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
