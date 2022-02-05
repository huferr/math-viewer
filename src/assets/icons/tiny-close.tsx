import * as React from "react";
import { Path, Svg } from "react-native-svg";
import { colors } from "../../styles";

export function TinyCloseIcon(props: React.SVGProps<Svg>) {
  const { fill, height, width } = props;

  return (
    <Svg width={width || "16"} height={height || "16"} viewBox="0 0 16 16" fill="none">
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M16 8C16 12.4184 12.4181 16 8.00022 16C3.58193 16 0 12.4184 0 8C0 3.58159 3.58193 0 8.00022 0C12.4181 0 16 3.58159 16 8Z" 
        fill={fill || colors.lightGray} />
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M8.84308 8.00014L11.4115 5.43208C11.6445 5.19914 11.6445 4.82146 11.4115 4.58852C11.1786 4.35558 10.8009 4.35558 10.5685 4.58852L8.00002 7.15706L5.43157 4.58852C5.19864 4.35558 4.82145 4.35558 4.58852 4.58852C4.35559 4.82146 4.35559 5.19914 4.58852 5.43208L7.15697 8.00014L4.58852 10.5687C4.35559 10.8016 4.35559 11.1788 4.58852 11.4118C4.70498 11.5282 4.85787 11.5862 5.01028 11.5862C5.16269 11.5862 5.3151 11.5282 5.43157 11.4118L8.00002 8.84323L10.5685 11.4118C10.6849 11.5282 10.8374 11.5862 10.9898 11.5862C11.1422 11.5862 11.2951 11.5282 11.4115 11.4118C11.6445 11.1788 11.6445 10.8016 11.4115 10.5687L8.84308 8.00014Z" 
        fill={fill || colors.darkerGray} />
    </Svg>

  );
}