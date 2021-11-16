import { CommonActions, NavigationProp } from "@react-navigation/native";

export function NavigateTo(
  name: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  params = {},
): void {
  navigation.dispatch(
    CommonActions.navigate({name, params}),
  );
}