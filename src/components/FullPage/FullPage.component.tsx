import React from "react";
import { Platform } from "react-native";
import { Button } from "..";
import { GoBackIcon } from "../../assets/icons/go-back";
import { Heading } from "../../styles";
import { 
  Body,
  ButtonContainer,
  Container,
  GoBackButton,
  Header,
  MessageContainer,
  KeyboardAvoidingViewContainer,
  ScrollViewPage,
  TextWrapper,
  TitleContainer,
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
  onPressPrimary?: () => void,
  onPressSecondary?: () => void,
  onPressDanger?: () => void,
  onPressGoBack?: () => void,
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
    onPressPrimary,
    onPressSecondary,
    onPressDanger,
    onPressGoBack,
  } = props;

  const showButtons = Boolean(onPressPrimary || onPressSecondary || onPressDanger);

  return (
    <Container>
     
      <Header>
        {onPressGoBack && 
          <GoBackButton activeOpacity={0.8} onPress={onPressGoBack}>
            <GoBackIcon />
          </GoBackButton>
        }
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
       
        {showButtons && (
          <ButtonContainer onlyOneButton={onlyOneButton}>
            {onPressSecondary && <Button onPress={onPressSecondary} type="secondary" title={buttonSecondaryTitle}/>}
            {onPressPrimary && <Button onPress={onPressPrimary} type="primary" title={buttonPrimaryTitle}/>}
            {onPressDanger && <Button onPress={onPressDanger} type="danger" title={buttonDangerTitle}/>}
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