import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import { Welcome } from "../pages";

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="welcome" component={Welcome} />
    </Auth.Navigator>
  );
};


