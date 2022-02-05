import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, SmallCard } from "../../components";
import { NavigateTo } from "../../services";
import { SearchIcon } from "../../assets/icons";
import { HeadingSmall, Paragraph } from "../../styles";
import { MathscoreView, MenuWrapper } from "./Homeworks.styles";
import { homeworksMenu } from "../../data";


export const Homeworks: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {});   
  
  return (
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
    </FullPage>
  );
};
