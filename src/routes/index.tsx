import React from "react";
import { useUser } from "~graphql/queries/useUser";
import { getData, storeData } from "~services/general/storage";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
  const { data: user } = useUser();
  const token =  getData("token");
  
  if (!token || user === undefined) return <AuthRoutes />;

  return <AppRoutes />;
};