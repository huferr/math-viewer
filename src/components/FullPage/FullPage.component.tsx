import React from "react";
import { Platform } from "react-native";
import { Button } from "..";
import { GoBackIcon } from "~/assets";
import { Heading } from "~/styles";
import { 
  Body,
  ButtonContainer,
  Container,
  Header,
  MessageContainer,
  KeyboardAvoidingViewContainer,
  ScrollViewPage,
  TextWrapper,
  TitleContainer,
  TopButtonsWrapper,
  TopButton,
} from "./FullPage.styles";

export interface FullPageProps {
  whiteTitle?: string,
  greenTitle?: string,
  greenTitleFirst?: boolean,
  children: Element,
  footerMessage?: Element,
  verticalBounce?: boolean,
  enableAvoidingView?: boolean,
  onlyOneButton?: boolean,
  buttonPrimaryTitle?: string,
  buttonSecondaryTitle?: string,
  buttonDangerTitle?: string,
  titleFontSize?: number,
  rightButtonIcon?: JSX.Element,
  onPressRight?: () => void,
  onPressPrimary?: () => void,
  onPressSecondary?: () => void,
  onPressDanger?: () => void,
  onPressGoBack?: () => void,
  loadingPrimaryBtn?: boolean,
  loadingSecondaryBtn?: boolean,
  loadingDangerBtn?: boolean,
}

export const FullPage: React.FC<FullPageProps> = (props) => {
  const {
    whiteTitle,
    greenTitle,
    greenTitleFirst,
    children,
    footerMessage,
    onlyOneButton,
    verticalBounce,
    enableAvoidingView,
    buttonPrimaryTitle,
    buttonSecondaryTitle,
    buttonDangerTitle,
    titleFontSize,
    rightButtonIcon,
    onPressRight,
    onPressPrimary,
    onPressSecondary,
    onPressDanger,
    onPressGoBack,
    loadingPrimaryBtn,
    loadingSecondaryBtn,
    loadingDangerBtn,
  } = props;

  const showButtons = Boolean(onPressPrimary || onPressSecondary || onPressDanger);

  return (
    <Container>
     
      <Header>
        <TopButtonsWrapper>
          {onPressGoBack && 
          <TopButton activeOpacity={0.8} onPress={onPressGoBack}>
            <GoBackIcon />
          </TopButton>
          }
          {onPressRight && 
          <TopButton activeOpacity={0.8} onPress={onPressRight}>
            {rightButtonIcon}
          </TopButton>
          }
        </TopButtonsWrapper>
        
        {whiteTitle ? 
          <TitleContainer>
            {greenTitleFirst ? 
              (
                <TextWrapper>
                  <Heading fontSize={titleFontSize} green>{greenTitle}</Heading>
                  {whiteTitle ? "  " : null}
                  <Heading fontSize={titleFontSize} bold>{whiteTitle}</Heading>
                </TextWrapper>
              )
              : (
                <TextWrapper>
                  <Heading fontSize={titleFontSize} bold>{whiteTitle}</Heading>
                  {greenTitle ? "  " : null}
                  <Heading fontSize={titleFontSize} green>{greenTitle}</Heading>
                </TextWrapper>
              )}
          </TitleContainer>
          : null}
      </Header>
      <KeyboardAvoidingViewContainer
        behavior={Platform.select({ ios: "padding" })}
        enabled={enableAvoidingView}
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
       
        {showButtons && (
          <ButtonContainer onlyOneButton={onlyOneButton}>
            {onPressSecondary && <Button loading={loadingSecondaryBtn} onPress={onPressSecondary} type="secondary" title={buttonSecondaryTitle}/>}
            {onPressPrimary && <Button loading={loadingPrimaryBtn} onPress={onPressPrimary} type="primary" title={buttonPrimaryTitle}/>}
            {onPressDanger && <Button loading={loadingDangerBtn} onPress={onPressDanger} type="danger" title={buttonDangerTitle}/>}
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