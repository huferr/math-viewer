import React, { useState } from "react";
import { Button, InputFormula } from "../../../../components";
import { Animation } from "../../../../components/Animation/Animation.component";
import { circleAreaFormula } from "../../../../services";
import { colors, HeadingSmall, Paragraph, Subtitle } from "../../../../styles";
import { AnimViewer, InputWrapper, Spinner, ViewerContent, ViewerInfo } from "../../Viewer.styles";
import CircleAnim from "../../../../assets/animations/circle.json";
import { getAnimationSize } from "../../../../services";

export const CircleAreaFormula: React.FC = () => {
  const [value, setValue] = useState("");
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState<string | number>();
  const [showAnim, setShowAnim] = useState(false);
  const [AnimSize, setAnimSize] = useState(0);

  const formatedValue = Number(value.replace(",", "."));
  
  const onRun = () => {
    setAnimSize(getAnimationSize(formatedValue));
    setRadius(value);
    setShowAnim(false);
    setTimeout(() => setShowAnim(true), 600);
    setResult(circleAreaFormula(formatedValue));
  };

  return (
    <>
      <HeadingSmall 
        green
        italic
        textAlign="center"
        marginTop={20}  
      >
      Circle Area Formula
      </HeadingSmall>
      <HeadingSmall bold marginTop={20}>
        <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        = π * r ²
      </HeadingSmall>
      <Paragraph textAlign="center" marginTop={20} italic>
        π ≈ 3.14159
      </Paragraph>
      <Paragraph textAlign="center" marginTop={10} italic>
        r = radius
      </Paragraph>
      <Subtitle  marginTop={20} marginBottom={20}>
        <Subtitle textAlign="center" green>Obs.: </Subtitle>let’s use<Subtitle green> centimeters</Subtitle> as the unit of measurement.
      </Subtitle>
      <InputWrapper>
        <HeadingSmall bold>
          <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        = π *
          {"  "}
        </HeadingSmall>
        <InputFormula value={value} onChangeText={setValue}/>
        <HeadingSmall bold> ²</HeadingSmall> 
      </InputWrapper>
      <Button type="half" title="Run" onPress={onRun}/>
      <ViewerContent>
        <ViewerInfo>
          {typeof result === "number" ? (
            <>
              <Subtitle><Subtitle green>A </Subtitle>≈ {result} cm²</Subtitle>
              <Subtitle>R = {radius}{radius ? " cm" : ""}</Subtitle>
            </>
          )
            : <Subtitle>{result}</Subtitle>  
          }
        </ViewerInfo>
        <AnimViewer>
          {showAnim && typeof result !== "string" && <Animation width={AnimSize} height={AnimSize} source={CircleAnim} autoPlay loop={false} />} 
          {!showAnim && typeof result !== "string" && result && <Spinner color={colors.primary}/>}
        </AnimViewer>
      </ViewerContent>
    </>
  );
};