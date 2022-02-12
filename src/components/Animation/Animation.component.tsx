import React from "react";
import { Lottie } from "./Animation.styles";

interface AnimationObject {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
    nm: string;
    ddd: number;
    assets: any[];
    layers: any[];
}

interface AnimationProps {
    autoPlay: boolean;
    source: string | AnimationObject | { uri: string };
}

export const Animation: React.FC<AnimationProps> = ({ autoPlay, source }) => {
  return (
    <Lottie
      source={source} 
      autoPlay={autoPlay}
    />
  );
};