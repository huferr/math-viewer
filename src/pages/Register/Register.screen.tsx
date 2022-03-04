import React, { useState } from "react";
import { FullPage, Input } from "~/components";
import { TopIcon } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { useAppDispatch } from "~app";
import { useRegister } from "~graphql/mutations/useRegister";

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  
  const [ registerData, setRegisterData ] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  });

  const goBack = () => navigation.goBack();
  
  const { mutateAsync: register } = useRegister();

  const handleRegister = async () => {
    try {
      if (registerData.confirmPassword !== registerData.password) setRegisterData({ ...registerData, confirmPasswordError: "Passwords doesn't match" });
      else await register({
        userRegisterInput: {
          name: registerData.nickname,
          email: registerData.email,
          password: registerData.password,
        }
      });
    } catch (e: any) {
      if(e.name.includes("NAME_CANNOT_BE_EMPTY")) setRegisterData({ ...registerData, nickNameError: "Nickname can't be empty" });
      if(e.message.includes("NAME_ALREADY_EXISTS")) setRegisterData({ ...registerData, nickNameError: "This nickname is already in use" });
      if(e.message.includes("NAME_TOO_SHORT")) setRegisterData({ ...registerData, nickNameError: "This nickname is too short. Minimum is 4 characters" });
      if(e.message.includes("EMAIL_CANNOT_BE_EMPTY")) setRegisterData({ ...registerData, emailError: "Email can't be empty" });
      if(e.message.includes("EMAIL_ALREADY_EXISTS")) setRegisterData({ ...registerData, emailError: "This email has already been registred" });
      if(e.message.includes("INVALID_EMAIL")) setRegisterData({ ...registerData, emailError: "This isn't a valid email" });
      if(e.message.includes("PASSWORD_CANNOT_BE_EMPTY")) setRegisterData({ ...registerData, passwordError: "Password can't be empty" });
      if(e.message.includes("PASSWORD_TOO_SHORT")) setRegisterData({ ...registerData, passwordError: "This password is too shot. Minimun is 6 characters" });
    }
  };

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      onPressPrimary={handleRegister}
      onlyOneButton
      buttonPrimaryTitle="Continue"
      verticalBounce={false}
      enableAvoidingView={true}
    >
      <TopIcon>λ</TopIcon>
      <Input 
        type="primary"
        label="Nickname" 
        style={{marginTop: 10}}
        placeholder="Nickname"
        value={registerData.nickname}
        onChangeText={(n) => setRegisterData({ ...registerData, nickname: n, nickNameError: "" })} 
        errorText={registerData.nickNameError}
      />
      <Input 
        type="primary"
        label="E-mail" 
        style={{marginTop: 10}}
        placeholder="Email"
        value={registerData.email}
        onChangeText={(e) => setRegisterData({ ...registerData, email: e, emailError: "" })} 
        errorText={registerData.emailError}
      />
      <Input 
        type="primary"
        label="Password" 
        style={{marginTop: 10}}
        placeholder="Password"
        value={registerData.password}
        secureTextEntry
        onChangeText={(p) => setRegisterData({ ...registerData, password: p, passwordError: "" })} 
        errorText={registerData.passwordError}
      />
      <Input 
        type="primary"
        label="Confirm Password" 
        style={{marginTop: 10}}
        placeholder="Confirm password" 
        value={registerData.confirmPassword}
        secureTextEntry
        onChangeText={(np) => setRegisterData({ ...registerData, confirmPassword: np, confirmPasswordError: ""})}
        errorText={registerData.confirmPasswordError}
      />
    </FullPage>
  );
};