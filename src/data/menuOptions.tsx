import React from "react";
import { EyeIcon, GraphIcon } from "../assets/icons";
import { MedalIcon } from "../assets/icons/medal";
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