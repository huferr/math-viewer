import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import {
  Welcome,
  Login,
  Register,
  VerifyEmail,
  Onboarding,
  RecoveryPassword,
  SuccessRecovery,
  NewPassword
} from "../pages";


const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="welcome" component={Welcome} />
      <Auth.Screen name="login" component={Login} />
      <Auth.Screen name="signup" component={Register} />
      <Auth.Screen name="verifyEmail" component={VerifyEmail} />
      <Auth.Screen name="onboarding" component={Onboarding} />
      <Auth.Screen name="recoveryPassword" component={RecoveryPassword} />
      <Auth.Screen name="newPassword" component={NewPassword} />
      <Auth.Screen name="successRecovery" component={SuccessRecovery} />
    </Auth.Navigator>
  );
};


