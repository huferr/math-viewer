import React from "react";
import { Platform } from "react-native";
import { Button } from "..";
import { GoBackIcon } from "../../assets/icons/go-back";
import { Body, ButtonContainer, Container, GoBackButton, Header, MessageContainer, KeyboardAvoidingViewContainer, ScrollViewPage, TextWrapper, TitleContainer, Title } from "./FullPage.styles";
import { FullPageProps } from "./FullPage.types";

export const FullPage: React.FC<FullPageProps> = (props) => {
  const {
    whiteTitle,
    greenTitle,
    greenTitleFirst,
    onPressGoBack,
    children,
    footerMessage,
    buttons,
    onlyOneButton,
    buttonPrimary,
    buttonSecondary,
    onPressPrimary,
    onPressSecondary,
    buttonSecondaryTitle,
    buttonPrimaryTitle,
    verticalBounce,
    enableAvoidingView,
  } = props;

  return (
    <Container>
     
      <Header>
        {onPressGoBack && 
            <>
              <GoBackButton activeOpacity={0.8} onPress={onPressGoBack}>
                <GoBackIcon />
              </GoBackButton>
            </>
        }
        {whiteTitle && 
           <>
             <TitleContainer>
               {greenTitleFirst ? 
                 (
                   <TextWrapper>
                     <Title green>{greenTitle}</Title>{whiteTitle ? "  " : null}<Title bold>{whiteTitle}</Title>
                   </TextWrapper>
                 )
                 : (
                   <TextWrapper>
                     <Title bold>{whiteTitle}</Title>{greenTitle ? "  " : null}<Title green>{greenTitle}</Title>
                   </TextWrapper>
                 )}
             </TitleContainer>
           </>}
      </Header>
      <KeyboardAvoidingViewContainer
        behavior={Platform.select({ ios: "padding" })}
        enabled={enableAvoidingView}
        keyboardVerticalOffset={Platform.select({ios: 20, android: 500})}
      >
        <ScrollViewPage
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={verticalBounce}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
        
          <Body>
            {children}
          </Body>
        </ScrollViewPage>
       
        {buttons && (
          <ButtonContainer onlyOneButton={onlyOneButton}>
            {buttonSecondary && <Button onPress={onPressSecondary} type="secondary" title={buttonSecondaryTitle}/>}
            {buttonPrimary && <Button onPress={onPressPrimary} type="primary" title={buttonPrimaryTitle}/>}
          </ButtonContainer>
        )}
        {footerMessage && (
          <MessageContainer>
            {footerMessage}  
          </MessageContainer>
        )} 
   
      </KeyboardAvoidingViewContainer> 
      
    </Container>
  );
};