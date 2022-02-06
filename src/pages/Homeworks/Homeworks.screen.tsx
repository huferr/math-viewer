import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, ModalFullHeight, SmallCard } from "../../components";
import { NavigateTo } from "../../services";
import { SearchIcon } from "../../assets/icons";
import { Heading, HeadingSmall, Paragraph } from "../../styles";
import { MathscoreView, MenuWrapper } from "./Homeworks.styles";
import { homeworksMenu } from "../../data";


export const Homeworks: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 
  const [openOnboardingModal, setOpenOnboardingModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpenOnboardingModal(true), 500);
  },[]);
  
  return (
    <>
      <FullPage
        onPressGoBack={goBack}
        rightButtonIcon={<SearchIcon />}
        onPressRight={() => setOpenSearchModal(true)}
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

        <ModalFullHeight visible={openSearchModal} onRequestClose={() => setOpenSearchModal(false)}>
          <HeadingSmall
            textAlign="center"
            marginTop={30}
            marginBottom={30}
            italic
            green  
          >What
            {" "} 
            <HeadingSmall italic>
          are you looking for?
            </HeadingSmall>
          </HeadingSmall>
          <Input type="search" placeholder="Searh for homeworks"/>
        </ModalFullHeight>
      </FullPage>
    </>
  );
};
