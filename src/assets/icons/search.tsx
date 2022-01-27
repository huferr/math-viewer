import React from "react";
import { Path, Svg } from "react-native-svg";

export function SearchIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 25, height = 25, fill = "none", stroke = "white" } = props;

  return (
    <Svg 
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
    >
      <Path 
        d="M9.67506 3.28767C11.387 5.10341 11.3028 7.96314 9.48709 9.67506C7.67136 11.387 4.81163 11.3028 3.09971 9.48709C1.38779 7.67136 1.47194 4.81163 3.28767 3.09971C5.10341 1.38779 7.96314 1.47194 9.67506 3.28767Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"/>
      <Path
        d="M11.1749 11.4687L16.6483 17.3032"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeWidth="1.5"/>
    </Svg>
  );
}
  

