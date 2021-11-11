import React from "react";
import { GoBackIcon } from "../../assets/icons/go-back";
import { Body, Container, GoBackButton, Header, Title, TitleContainer } from "./FullPage.styles";

export interface FullPageProps {
  title?: string,
  goBack?: boolean,
  onPressGoBack?: () => void,
  children: Element,
}

export const FullPage: React.FC<FullPageProps> = (props) => {
  const {title, goBack, onPressGoBack, children} = props;
  return (
    <Container>
      <Body>
        <Header>
          {goBack && 
            <>
              <GoBackButton activeOpacity={0.8}>
                <GoBackIcon />
              </GoBackButton>
            </>
          }
          {title && 
           <>
             <TitleContainer>
               <Title>{title}</Title>
             </TitleContainer>
           </>}
        </Header>
        {children}
      </Body>
    </Container>
  );
};