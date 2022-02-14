import React from "react";
import { EyeIcon, MedalIcon } from "~/assets";
import { AppPagesType } from "~/typings";

interface MenuOptions {
  id: AppPagesType,
  title: string,
  subtitle: string,
  icon?: JSX.Element,
}

export const menuOptions: MenuOptions[] = [
  {
    id: "viewer",
    title: "Viewer",
    subtitle: "Explore functions, calculations and numbers to see what they show visually",
    icon: <EyeIcon />,
  },
  {
    id: "mathscore",
    title: "Mathscore",
    subtitle: "Check your Mathscore points and your position in the app's global ranking",
    icon: <MedalIcon />
  }
];