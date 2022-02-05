import * as React from "react";
import { Path, Svg } from "react-native-svg";

export function Close(props: React.SVGProps<Svg>) {
  const { fill, width, height } = props;
  return (
    <Svg
      width={width || 17}
      height={height || 17}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        d="M3.28223 3.33362L13.2822 13.3336M3.28223 13.3336L8.28223 8.33362L13.2822 3.33362"
        stroke={fill || "#757893"}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
}