import React from "react";
import { Path, Svg } from "react-native-svg";

export function ProfileIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 23, height = 23, fill = "none" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <Path 
        d="M14.5556 5.51852C14.5556 8.01403 12.5326 10.037 10.0371 10.037C7.54156 10.037 5.51855 8.01403 5.51855 5.51852C5.51855 3.02301 7.54156 1 10.0371 1C12.5326 1 14.5556 3.02301 14.5556 5.51852Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path 
        d="M1 18.4286L1.21484 18.0756C5.23873 11.4649 14.8353 11.4649 18.8592 18.0756L19.0741 18.4286" 
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"/>
    </Svg>
  );
}