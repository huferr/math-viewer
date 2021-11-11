import React from "react";
import { Path, Svg } from "react-native-svg";

export function GoBackIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 17, height = 29, fill = "none" } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 17 29" fill={fill}>
      <Path 
        d="M15.5 2L3 14.5L15.5 27" 
        stroke="#26D76D" 
        strokeOpacity="0.75" 
        strokeWidth="3"
      />
    </Svg>
  );
}
  

