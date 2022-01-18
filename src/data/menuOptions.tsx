import React from "react";
import { GraphIcon } from "../assets/icons";

interface MenuOptions {
  id: string,
  title: string,
  subtitle: string,
  icon?: JSX.Element,
}

export const menuOptions: MenuOptions[] = [
  {
    id: "viewer",
    title: "Viewer",
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
    icon: <GraphIcon width={130} height={100} />,
  },
  {
    id: "homeworks",
    title: "Homeworks",
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
    icon: <GraphIcon width={130} height={100} />
  }
];