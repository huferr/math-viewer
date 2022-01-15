import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import {
  Dashboard,
  Profile,
  Homeworks,
  Mathscore,
  Viewer,
} from "../pages";

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="profile" component={Profile} />
    {/* <Stack.Screen name="homeworks" component={Homeworks} />
    <Stack.Screen name="mathscore" component={Mathscore} />
    <Stack.Screen name="viewer" component={Viewer} /> */}
  </Stack.Navigator>
);