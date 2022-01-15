import { Platform } from "react-native";

export const isIos = () => Platform.OS === "ios";
export const isAndroid = () => Platform.OS === "android";
export * from "react-native-device-info";