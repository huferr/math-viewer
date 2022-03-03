import React, { useEffect, useState } from "react";
import { FullPage, Input } from "~/components";
import { Pi } from "./Login.styles";
import { useNavigation } from "@react-navigation/core";
import { NavigateTo } from "~/services";
import { useAppDispatch } from "~app/hooks";
import { verifyEmailFor } from "~app/slices/verifyEmailFor.slice";
import { useLogin } from "~graphql/mutations/useLogin";
import { getData } from "~services/general/storage";
import SplashScreen from "react-native-splash-screen";

export const Login: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  const { isLoading: isLoginLoading, mutateAsync: login, isSuccess } = useLogin();
  
  const goBack = () => NavigateTo("welcome", navigation, {});

  const handleLogin = async () => {
    try {
      await login({
        userLoginInput: {
          email: loginData.email,
          password: loginData.password,
        }
      });
      setLoginData({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
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
      verticalBounce={false}
      enableAvoidingView={false}
    >
      <Pi>π</Pi>
      <Input 
        type="primary"
        label="E-mail" 
        style={{marginTop: 70}} 
        placeholder="Enter your e-mail" 
        errorText={loginData.emailError} 
        value={loginData.email}
        onChangeText={(e: string) => setLoginData({...loginData, email: e, emailError: ""})}
      />
      <Input 
        type="primary"
        label="Password"  
        style={{marginTop: 10}} 
        placeholder="Enter your password" 
        errorText={loginData.passwordError} 
        value={loginData.password}
        onChangeText={(p: string) => setLoginData({...loginData, password: p, passwordError: ""})}
        secureTextEntry
      />
    </FullPage>
  );
};