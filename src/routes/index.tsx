import React, { useEffect, useState } from "react";
import { useUser } from "~graphql/queries/useUser";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
  const { data: user } = useUser();

  return user ? <AppRoutes /> : <AuthRoutes />;
};