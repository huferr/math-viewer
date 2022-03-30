import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useRegister } from "~graphql/mutations/useRegister";
import { FullPage, Input } from "~/components";
import { TopIcon } from "./Register.styles";
import { metrics } from "~styles";

export const Register: React.FC = () => {
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
  const [logouLoading, setlogoutLoading] = useState(false);
  const containerRef = useRef(null);

  const emailInputRef = useRef<any>(null); 
  const passwordInputRef = useRef<any>(null);
  const confirmInputRef = useRef<any>(null); 

  const updateData = (property: string, newData: string) => setRegisterData({ ...registerData, [property]: newData });

  const goBack = () => navigation.goBack();

  const { mutateAsync: register } = useRegister();

  const handleRegister = async () => {
    try {
      if (registerData.nickname === "") updateData("nickNameError", "Nickname can't be empty");
      else if (registerData.nickname.length < 4) updateData("nickNameError", "This nickname is too short. Minimum is 4 characters");
      
      else if (registerData.email === "") updateData("emailError", "Email can't be empty");
      else if (registerData.password === "") updateData("passwordError", "Password can't be empty");
      else if (registerData.password.length < 6) updateData("passwordError", "This password is too shot. Minimun is 6 characters");
      else if (registerData.confirmPassword !== registerData.password) updateData("confirmPasswordError", "Passwords doesn't match");

      else setTimeout(async () => {
        setlogoutLoading(true);
        await register({
          userRegisterInput: {
            name: registerData.nickname,
            email: registerData.email,
            password: registerData.password,
          }
        });
      }, 1500); 
      
    } catch (e: any) {
      if(e.message.includes("NAME_ALREADY_EXISTS")) setRegisterData({ ...registerData, nickNameError: "This nickname is already in use" });
      if(e.message.includes("EMAIL_ALREADY_EXISTS")) setRegisterData({ ...registerData, emailError: "This email has already been registred" });
      if(e.message.includes("INVALID_EMAIL")) setRegisterData({ ...registerData, emailError: "This isn't a valid email" });
    }
  };

  return (
    <FullPage 
      whiteTitle="Register to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      onPressPrimary={handleRegister}
      loadingPrimaryBtn={logouLoading}
      onlyOneButton
      buttonPrimaryTitle="Continue"
    >
      <TopIcon>λ</TopIcon>
      <Input
        type="primary"
        label="Nickname" 
        style={{marginTop: 5}}
        placeholder="Nickname"
        value={registerData.nickname}
        onChangeText={(n) => setRegisterData({ ...registerData, nickname: n, nickNameError: "" })} 
        errorText={registerData.nickNameError}
        onSubmitEditing={() => emailInputRef?.current?.focus()}
      />
      <Input
        inputRef={emailInputRef} 
        type="primary"
        label="E-mail" 
        style={{marginTop: 5}}
        placeholder="Email"
        value={registerData.email}
        onChangeText={(e) => setRegisterData({ ...registerData, email: e, emailError: "" })} 
        errorText={registerData.emailError}
        onSubmitEditing={() => passwordInputRef?.current?.focus()}
      />
      <Input
        inputRef={passwordInputRef} 
        type="primary"
        label="Password" 
        style={{marginTop: 5}}
        placeholder="Password"
        value={registerData.password}
        secureTextEntry
        onChangeText={(p) => setRegisterData({ ...registerData, password: p, passwordError: "" })} 
        errorText={registerData.passwordError}
        onSubmitEditing={() => confirmInputRef?.current?.focus()}
      />
      <Input
        inputRef={confirmInputRef} 
        type="primary"
        label="Confirm Password" 
        style={{marginTop: 5}}
        placeholder="Confirm password" 
        value={registerData.confirmPassword}
        secureTextEntry
        onChangeText={(np) => setRegisterData({ ...registerData, confirmPassword: np, confirmPasswordError: ""})}
        errorText={registerData.confirmPasswordError}
      />
    </FullPage>
  );
};