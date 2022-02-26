import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "~/components";
import { NavigateTo } from "~/services";
import { Heading, HeadingSmall, Paragraph, Subtitle } from "~/styles";
import { viewerFormulas, ViewerFormulaTypes } from "~/data";
import { useAppDispatch, useAppSelector } from "~app/hooks";
import { closeViewerModal, selectViewerModalState } from "~app/slices/InfoModal.slice";

export const Viewer: React.FC = () => {
  // global state
  const isOpenModal = useAppSelector(selectViewerModalState);
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
      <HeadingSmall
        green
        italic
        textAlign="center"
        marginTop={30}
      >
        Viewer
      </HeadingSmall>

      <Subtitle textAlign="center" marginTop={40} marginBottom={40}>Choose any formula to see what it represents.</Subtitle>
      <Input placeholder="Search for formulas" type="search" value={searchValue} onChangeText={setSearchValue} />
        
      {handleFormulas}
        
      <Modal isOpen={isOpenModal} onClose={() => dispatch(closeViewerModal())}>
        <Heading bold textAlign="center">Welcome to</Heading>
        <Heading green textAlign="center">Viewer</Heading>
        <Paragraph marginTop={20}>
            With
          {" "}
          <Paragraph green>Viewer</Paragraph>
          {" "}
            you will see what the numbers and functions can
          {" "}
          <Paragraph green>show</Paragraph>
          {" "}
            us
          {" "}
          <Paragraph green>visually</Paragraph>
            . It is <Paragraph green>awesome</Paragraph>!
        </Paragraph>
      </Modal>
    </FullPage>
  );
};