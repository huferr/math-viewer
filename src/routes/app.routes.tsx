import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import {
  Dashboard,
  Profile,
  Mathscore,
  Viewer,
  ChangeNickname,
  ChangeEmail,
  VerifyEmail,
  Content,
} from "~/pages";
import { isIos } from "~/services";

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false, presentation: isIos() ? "card" : "transparentModal"}}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="mathscore" component={Mathscore} />
    <Stack.Screen name="viewer" component={Viewer} />
    <Stack.Screen name="content" component={Content} />
    <Stack.Screen name="verify_email" component={VerifyEmail} />
    <Stack.Screen name="change_nickname" component={ChangeNickname} />
    <Stack.Screen name="change_email" component={ChangeEmail} />
  </Stack.Navigator>
);