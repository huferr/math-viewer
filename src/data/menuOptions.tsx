import React from "react";
import { EyeIcon, MedalIcon } from "../assets/icons";
import { AppPagesType } from "../typings/pages";

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
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
    icon: <EyeIcon />,
  },
  {
    id: "mathscore",
    title: "Mathscore",
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
    icon: <MedalIcon />
  }
];