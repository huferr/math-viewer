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
  onPressGoBack?: () => void,
  children: Element,
  footerMessage?: Element,
  buttons?: boolean,
  onlyOneButton?: boolean,
  buttonPrimary?: boolean,
  buttonSecondary?: boolean,
  onPressPrimary?: () => void,
  onPressSecondary?: () => void,
  buttonSecondaryTitle?: string,
  buttonPrimaryTitle?: string,
  verticalBounce?: boolean,
  enableAvoidingView?: boolean,
  }

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
        {whiteTitle ? 
          <>
            <TitleContainer>
              {greenTitleFirst ? 
                (
                  <TextWrapper>
                    <Heading green>{greenTitle}</Heading>{whiteTitle ? "  " : null}<Heading bold>{whiteTitle}</Heading>
                  </TextWrapper>
                )
                : (
                  <TextWrapper>
                    <Heading bold>{whiteTitle}</Heading>{greenTitle ? "  " : null}<Heading green>{greenTitle}</Heading>
                  </TextWrapper>
                )}
            </TitleContainer>
          </> : null}
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