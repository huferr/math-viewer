import React, { useRef, useState } from "react";
import { FullPage, Input } from "~/components";
import { Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { useLogin } from "~graphql/mutations/useLogin";

export const Login: React.FC = () => {

  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });
  const passwordInputRef = useRef<any>(null);

  const { isLoading: isLoginLoading, mutateAsync: login } = useLogin();
  
  const updateData = (property: string, newData: string) => setLoginData({ ...loginData, [property]: newData });
  const goBack = () => NavigateTo("welcome", navigation, {});

  const handleLogin = async () => {
    try {
      if (loginData.email === "") updateData("emailError", "Email can't be empty");
      else if (loginData.password === "") updateData("passwordError", "Password can't be empty");
      else await login({
        userLoginInput: {
          email: loginData.email,
          password: loginData.password,
        }
      });
    } catch (e: any) {
      if ((e.message).includes("WRONG_EMAIL")) setLoginData({...loginData, emailError: "Email inválido"});
      if ((e.message).includes("WRONG_PASSWORD")) setLoginData({...loginData, passwordError: "Senha inválida"});
    }
  };

  const goToRecoveryPassword = () => NavigateTo("enter_recovery_email", navigation, {});

  return (
    <FullPage 
      whiteTitle="Login to" 
      greenTitle="Math" 
      onPressGoBack={goBack}
      buttonPrimaryTitle="Continue"
      loadingPrimaryBtn={isLoginLoading}
      onPressPrimary={handleLogin}
      buttonSecondaryTitle="Forgot my password"
      onPressSecondary={goToRecoveryPassword}
    >
      <Pi>π</Pi>
      <Input 
        type="primary"
        label="E-mail" 
        style={{marginTop: 70}} 
        placeholder="Enter your e-mail" 
        errorText={loginData.emailError} 
        value={loginData.email}
        onSubmitEditing={() => passwordInputRef?.current?.focus()}
        onChangeText={(e: string) => setLoginData({...loginData, email: e, emailError: ""})}
        textContentType="password"
      />
      <Input
        inputRef={passwordInputRef} 
        type="primary"
        label="Password"  
        style={{marginTop: 10}} 
        placeholder="Enter your password" 
        errorText={loginData.passwordError} 
        value={loginData.password}
        onChangeText={(p: string) => setLoginData({...loginData, password: p, passwordError: ""})}
        textContentType="password"
        secureTextEntry
      />
    </FullPage>
  );
};