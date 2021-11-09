import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps { 
    type: "primary" | "secondary" | "half";
    title?: string;
    onPress?: () => void;
  }