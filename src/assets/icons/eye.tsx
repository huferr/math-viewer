import React from "react";
import { Path, Svg } from "react-native-svg";

export function EyeIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 107, height = 66, fill = "none" } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 107 66" fill={fill}>
      <Path 
        d="M4 26.5C4 26.5 22.9045 4 53.2513 4C83.598 4 103 26.5 103 26.5"
        stroke="#26D76D"
        strokeWidth="8"
      />
      <Path 
        d="M69 42C69 53.9673 61.4636 62 54 62C46.5364 62 39 53.9673 39 42C39 30.0327 46.5364 22 54 22C61.4636 22 69 30.0327 69 42Z"
        stroke="#26D76D"
        strokeWidth="8"
      />
    </Svg>
  );
}