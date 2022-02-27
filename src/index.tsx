import React, { useEffect, useRef } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { Routes } from "./routes";
import SplashScreen from "react-native-splash-screen";
import { store } from "~app";
import { Provider } from "react-redux";

export const App: React.FC = () => {

  const navRef = useNavigationContainerRef();
  const routeNameRef = useRef<unknown>();

  const onReady = async () => {
    routeNameRef.current = navRef?.getCurrentRoute()?.name;
  };

  const onStateChange = async () => {
    const currentRouteName = navRef?.getCurrentRoute()?.name;

    routeNameRef.current = currentRouteName;
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <NavigationContainer
      ref={navRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
};