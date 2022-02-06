import { Dimensions } from "react-native";
import { isIos } from "../services";

const { width, height } = Dimensions.get("window");

export default {
  basePadding: isIos() ? 20 : 10,
  baseRadius: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};