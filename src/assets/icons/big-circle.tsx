import React from "react";
import { Circle, Svg } from "react-native-svg";

export function BigCircle(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 120, height = 120, fill = "none" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 120 120" fill={fill}>
      <Circle cx="60" cy="60" r="60" fill="#26D76D"/>
    </Svg>
  );
}
