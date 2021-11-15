import { StyleProp, ViewStyle } from "react-native";

export interface InputProps {
  style?: StyleProp<ViewStyle>,
  placeholder?: string,
  errorText?: string,
}