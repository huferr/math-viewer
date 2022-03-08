import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import {
  Welcome,
  Login,
  Register,
  VerifyEmail,
  Onboarding,
  EnterRecoveryEmail,
  SuccessRecovery,
  NewPassword
} from "~/pages";

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="welcome" component={Welcome} />
      {/* Shared Domains */}
      <Auth.Screen name="verify_email" component={VerifyEmail} />

      {/* Login Domain */}
      <Auth.Screen name="login" component={Login} />
      <Auth.Screen name="enter_recovery_email" component={EnterRecoveryEmail} />
      <Auth.Screen name="new_password" component={NewPassword} />
      <Auth.Screen name="success_recovery" component={SuccessRecovery} />

      {/* Register Domain */}
      <Auth.Screen name="signup" component={Register} />
      <Auth.Screen name="onboarding" component={Onboarding} />
      
    </Auth.Navigator>
  );
};


