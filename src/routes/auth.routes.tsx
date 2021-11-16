import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import { Welcome, Login, Register } from "../pages";


const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="welcome" component={Welcome} />
      <Auth.Screen name="login" component={Login} />
      <Auth.Screen name="signup" component={Register} />
    </Auth.Navigator>
  );
};


