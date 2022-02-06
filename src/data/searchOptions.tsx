export interface DashboardSearchOptions {
    title: string,
    navigateTo: string,
}

export const dashboardSearchOptions: DashboardSearchOptions[] = [
  {
    title: "Homeworks",
    navigateTo: "homeworks"
  },
  {
    title: "Mathscore",
    navigateTo: "mathscore"
  }, {
    title: "Viewer",
    navigateTo: "viewer"
  },
  {
    title: "Profile",
    navigateTo: "profile"
  },
  {
    title: "Change Nickname",
    navigateTo: "change_nickname"
  },
  {
    title: "Change Email",
    navigateTo: "change_email"
  }
];