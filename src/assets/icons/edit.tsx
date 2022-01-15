import React from "react";
import { Path, Svg } from "react-native-svg";

export function EditIcon(props: React.SVGProps<Svg>): JSX.Element {
  const { width = 17, height = 17, fill = "none" } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill={fill}>
      <Path 
        d="M12.0543 7.22279V10.3173C12.0543 10.9626 11.7979 11.5814 11.3416 12.0377C10.8853 12.494 10.2665 12.7503 9.62125 12.7503H3.43219C3.11272 12.7503 2.79642 12.6874 2.50128 12.5651C2.20614 12.4428 1.93796 12.2636 1.7121 12.0376C1.48623 11.8117 1.30712 11.5435 1.18494 11.2483C1.06275 10.9531 0.999902 10.6368 1 10.3173V4.1283C1 3.48316 1.25617 2.86443 1.71228 2.40817C2.16839 1.95192 2.78705 1.6955 3.43219 1.6953H6.52667" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <Path 
        d="M6.40525 9.3723L4.43494 9.61531C4.39433 9.62043 4.3531 9.6162 4.31437 9.60294C4.27564 9.58967 4.24041 9.56772 4.21146 9.53877C4.18252 9.50982 4.16055 9.47464 4.14729 9.43591C4.13402 9.39718 4.1298 9.35592 4.13493 9.3153L4.378 7.34505L10.4477 1.2753C10.624 1.09902 10.8633 1 11.1126 1C11.362 1 11.6011 1.09902 11.7775 1.2753L12.4735 1.97131C12.6497 2.14767 12.7488 2.38682 12.7488 2.63617C12.7488 2.88553 12.6497 3.12469 12.4735 3.30105L6.40525 9.3723Z" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </Svg>
  );
}