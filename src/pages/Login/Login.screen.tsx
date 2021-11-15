import React from "react";
import { FullPage, Input } from "../../components";
import { AuthorText, FooterMessage, PhraseText, Pi } from "./Login.styles";

export const Login: React.FC = () => {
  return (
    <FullPage 
      whiteTitle="Login to" 
      greenTitle="Math" 
      goBack
      buttons
      buttonPrimary
      buttonSecondary
      footerMessage={
        <FooterMessage>
          <PhraseText>&quot;The book of the world is written in mathematical language.&quot;</PhraseText>
          <AuthorText>- Galileu Galilei</AuthorText>
        </FooterMessage>
      }
    >
      <Pi>π</Pi>
      <Input style={{marginTop: 70}} placeholder="Email" errorText="Email do caralho"/>
      <Input style={{marginTop: 20}} placeholder="Password" errorText="Senha do caralho"/>
    </FullPage>
  );
};