import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import {
  Dashboard,
  Profile,
  Homeworks,
  OnboardingHomeworks,
  Mathscore,
  Viewer,
  ChangeNickname,
  ChangeEmail,
  VerifyEmail,
  SuccessChangeEmail,
  SuccessChangeNickname,
  Search,
} from "../pages";

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false }}>
    {/*Top Domains*/}
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="search" component={Search} />
    <Stack.Screen name="homeworks" component={Homeworks} />
    {/* <Stack.Screen name="mathscore" component={Mathscore} />
    <Stack.Screen name="viewer" component={Viewer} /> */}

    {/* Shared Domains */}
    <Stack.Screen name="verifyEmail" component={VerifyEmail} />

    {/* ChangeNickname Domain */}
    <Stack.Screen name="change_nickname" component={ChangeNickname} />
    <Stack.Screen name="success_change_nickname" component={SuccessChangeNickname} />

    {/* ChangeEmail Domain */}
    <Stack.Screen name="change_email" component={ChangeEmail} />
    <Stack.Screen name="success_change_email" component={SuccessChangeEmail} />

    {/* Homeworks Domain */}
    <Stack.Screen name="onboarding_homeworks" component={OnboardingHomeworks} />
  </Stack.Navigator>
);