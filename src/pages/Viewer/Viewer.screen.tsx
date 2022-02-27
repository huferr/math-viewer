import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "~/components";
import { NavigateTo } from "~/services";
import * as Text from "~/styles/typography";
import { viewerFormulas, ViewerFormulaTypes } from "~/data";
import { useAppDispatch, useAppSelector, viewerModal, selectModalState } from "~app";

export const Viewer: React.FC = () => {
  // global state
  const isOpenModal = useAppSelector((state) => selectModalState(state).isViewerModalOpen);
  const dispatch = useAppDispatch();
  
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {});
  const [searchValue, setSearchValue] = useState("");
  

  const quickSearch = (array: ViewerFormulaTypes[], search: string ) => 
    array.filter((item) => item.title.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));

  const handleFormulas = (
    quickSearch(viewerFormulas, searchValue).map((item: ViewerFormulaTypes) => 
      <OptionList hasArrow key={item.id} content={item.title} onPress={() => NavigateTo("content", navigation, {page: item.id})}/>)
  );
  
  return (
    <FullPage onPressGoBack={goBack}>
      <Text.HeadingSmall
        green
        italic
        textAlign="center"
        marginTop={30}
      >
        Viewer
      </Text.HeadingSmall>

      <Text.Subtitle textAlign="center" marginTop={40} marginBottom={40}>Choose any formula to see what it represents.</Text.Subtitle>
      <Input placeholder="Search for formulas" type="search" value={searchValue} onChangeText={setSearchValue} />
        
      {handleFormulas}
        
      <Modal isOpen={isOpenModal} onClose={() => dispatch(viewerModal(false))}>
        <Text.Heading bold textAlign="center">Welcome to</Text.Heading>
        <Text.Heading green textAlign="center">Viewer</Text.Heading>
        <Text.Paragraph marginTop={20}>
            With
          {" "}
          <Text.Paragraph green>Viewer</Text.Paragraph>
          {" "}
            you will see what the numbers and functions can
          {" "}
          <Text.Paragraph green>show</Text.Paragraph>
          {" "}
            us
          {" "}
          <Text.Paragraph green>visually</Text.Paragraph>
            . It is <Text.Paragraph green>awesome</Text.Paragraph>!
        </Text.Paragraph>
      </Modal>
    </FullPage>
  );
};