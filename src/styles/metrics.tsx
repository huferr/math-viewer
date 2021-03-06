import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const metrics = {
  basePadding: 20,
  baseRadius: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};