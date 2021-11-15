import React from "react";
import { Button } from "..";
import { GoBackIcon } from "../../assets/icons/go-back";
import { Body, ButtonContainer, Container, Footer, GoBackButton, GreenTitle, Header, MessageContainer, TextWrapper, TitleContainer, WhiteTitle } from "./FullPage.styles";
import { FullPageProps } from "./FullPage.types";

export const FullPage: React.FC<FullPageProps> = (props) => {
  const {
    whiteTitle,
    greenTitle,
    greenTitleFirst,
    goBack,
    onPressGoBack,
    children,
    footerMessage,
    buttons,
    onlyOneButton,
    buttonPrimary,
    buttonSecondary,
    onPressPrimary,
    onPressSecondary
  } = props;

  return (
    <Container>
      <Body>
        <Header>
          {goBack && 
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
                     <GreenTitle>{greenTitle}</GreenTitle>{whiteTitle ? "  " : null}<WhiteTitle>{whiteTitle}</WhiteTitle>
                   </TextWrapper>
                 )
                 : (
                   <TextWrapper>
                     <WhiteTitle>{whiteTitle}</WhiteTitle>{greenTitle ? "  " : null}<GreenTitle>{greenTitle}</GreenTitle>
                   </TextWrapper>
                 )}
             </TitleContainer>
           </>}
        </Header>
        {children}
        <Footer>
          {buttons && (
            <ButtonContainer onlyOneButton={onlyOneButton}>
              {buttonSecondary && <Button onPress={onPressSecondary} type="secondary" title="Forgot my password"/>}
              {buttonPrimary && <Button onPress={onPressPrimary} type="primary" title="Continue"/>}
            </ButtonContainer>
          )}
          {footerMessage && (
            <MessageContainer>
              {footerMessage}  
            </MessageContainer>
          )}
          
        </Footer>  
      </Body>
    </Container>
  );
};