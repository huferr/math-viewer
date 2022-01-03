import React from "react";
import { Line, Path, Svg } from "react-native-svg";

export function GraphIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 210, height = 155, fill = "none" } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 210 155" fill={fill}>
      <Path 
        d="M174 18C174 112.5 90 124.333 48 121" 
        stroke="#26D76D" 
        strokeOpacity="0.6" strokeWidth="3"
      />
      <Path 
        d="M0 139.5H197.5V0" 
        stroke="white" 
        strokeOpacity="0.6"
      />
      <Path 
        d="M197.5 155V139.5H210" 
        stroke="white" 
        strokeOpacity="0.6"
      />
      <Line 
        x1="192" y1="18.5" x2="202" y2="18.5" 
        stroke="white" 
        strokeOpacity="0.6"
      />
      <Line 
        x1="48.5" y1="134" x2="48.5" y2="144" 
        stroke="white" 
        strokeOpacity="0.6"
      />
    </Svg>
  );
}
  

