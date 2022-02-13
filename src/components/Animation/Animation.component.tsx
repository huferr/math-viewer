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

export interface AnimationProps {
    autoPlay?: boolean;
    loop?: boolean;
    source: string | AnimationObject | { uri: string };
    width?: number;
    height?: number;
}

export const Animation: React.FC<AnimationProps> = ({ autoPlay, source, loop, width, height }) => {
  return (
    <Lottie
      source={source} 
      autoPlay={autoPlay}
      loop={loop}
      width={width}
      height={height}
    />
  );
};