import React, { useRef } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { Routes } from "./routes";

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

  return (
    <NavigationContainer
      ref={navRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      <Routes />
    </NavigationContainer>
  );
};