import * as React from "react";
import { Path, Svg } from "react-native-svg";

export function ArrowRightIcon (props: React.SVGProps<Svg>) {
  const { fill, width = 9, height = 14 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 9 14" fill={fill}>
      <Path
        d="M1.74221 12.4848L7.48462 6.7424L1.7422 0.999987"
        stroke="#C3C6DB"
        strokeWidth="1.5"
        strokeLinecap="round"/>
    </Svg>
  );
}