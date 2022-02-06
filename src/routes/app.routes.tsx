import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import {
  Dashboard,
  Profile,
  Homeworks,
  Mathscore,
  Viewer,
  ChangeNickname,
  ChangeEmail,
  VerifyEmail,
} from "../pages";

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false }}>

    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="homeworks" component={Homeworks} />
    <Stack.Screen name="mathscore" component={Mathscore} />
    <Stack.Screen name="viewer" component={Viewer} />
    <Stack.Screen name="verify_email" component={VerifyEmail} />
    <Stack.Screen name="change_nickname" component={ChangeNickname} />
    <Stack.Screen name="change_email" component={ChangeEmail} />
  </Stack.Navigator>
);