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
  },
  {
    id: "learn_math",
    title: "Learn Math",
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
  },
  {
    id: "homeworks",
    title: "Homeworks",
    subtitle: "Explore functions, calculations and numbers to see what they show visually!",
  }
];