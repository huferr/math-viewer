import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Modal, SmallCard } from "../../components";
import { NavigateTo } from "../../services";
import { SearchIcon } from "../../assets/icons";
import { Heading, HeadingSmall, Paragraph } from "../../styles";
import { MathscoreView, MenuWrapper } from "./Homeworks.styles";
import { homeworksMenu } from "../../data";
import { Text } from "react-native";


export const Homeworks: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 
  const [openOnboardingModal, setOpenOnboardingModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpenOnboardingModal(true), 500);
  },[]);
  
  return (
    <>
      <FullPage
        onPressGoBack={goBack}
        rightButtonIcon={<SearchIcon />}
        onPressRight={() => {}}
      >
        <HeadingSmall
          green
          italic
          textAlign="center"
          marginTop={30}
        >
        Homeworks
        </HeadingSmall>
      
        <MathscoreView>
          <Paragraph green>
          Mathscore:
            {" "}
            <Paragraph>
            9999
            </Paragraph>
          </Paragraph>
        </MathscoreView>
        <MenuWrapper>
          {homeworksMenu.map((m) => (
            <SmallCard
              disabled
              marginBottom={20}
              key={m.id} 
              title={m.title}
              text={m.subtitle}
            />
          ))}
        </MenuWrapper>

      
        <Modal isOpen={openOnboardingModal} onClose={() => setOpenOnboardingModal(false)}>
          <Heading bold textAlign="center">Welcome to</Heading>
          <Heading green textAlign="center">Homeworks</Heading>
          <Paragraph marginTop={20}>
            Here you
            {" "}
            <Paragraph green>exercise</Paragraph>
            {" "}
            what you have learned so far.
            Choose any category.
            {"\n"}
            {"\n"}
            For each
            {" "}
            <Paragraph green>completed</Paragraph>
            {" "}
            section, you will earn an amount of
            {" "}
            <Paragraph green>mathscore</Paragraph>!
          </Paragraph>
        </Modal>
      </FullPage>
    </>
  );
};
