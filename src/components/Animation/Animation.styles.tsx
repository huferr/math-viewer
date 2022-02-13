import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { AnimationProps } from "./Animation.component";

export const Lottie = styled(LottieView)<AnimationProps>`
  width: ${props => props.width || 250}px;
  height: ${props => props.height || 250}px;
`;
