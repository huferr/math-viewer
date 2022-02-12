import React, { useState } from "react";
import { Button, InputFormula } from "../../../../components";
import { triangleAreaFormula } from "../../../../functions";
import { HeadingSmall, Paragraph, Subtitle } from "../../../../styles";
import { InputWrapper, ViewerContent } from "../../Viewer.styles";

export const TriangleAreaFormula: React.FC = () => {
  const [value, setValue] = useState({ height: "", base: ""});
  const [result, setResult] = useState<string | number>();
  const height = Number(value.height.replace(",", "."));
  const base = Number(value.base.replace(",", "."));
  const onRun = () => setResult(triangleAreaFormula(height, base));

  return (
    <>
      <HeadingSmall 
        green
        italic
        textAlign="center"
        marginTop={20}  
      >
      Triangle Area Formula
      </HeadingSmall>
      <HeadingSmall bold marginTop={20}>
        <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        = ( h * b ) / 2
      </HeadingSmall>
      <Paragraph textAlign="center" marginTop={20} italic>
        h = height
      </Paragraph>
      <Paragraph textAlign="center" marginTop={10} italic>
        b = base
      </Paragraph>
      <Subtitle  marginTop={20} marginBottom={20}>
        <Subtitle textAlign="center" green>Obs.: </Subtitle>let’s use<Subtitle green> centimeters</Subtitle> as the unit of measurement.
      </Subtitle>
      <InputWrapper>
        <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        <HeadingSmall bold> = ( </HeadingSmall>
        <InputFormula value={value.height} onChangeText={(t) => setValue({...value, height: t})}/>
        <HeadingSmall bold> * </HeadingSmall>
        <InputFormula value={value.base} onChangeText={(t) => setValue({...value, base: t})}/>
        <HeadingSmall bold> ) / 2</HeadingSmall>
      </InputWrapper>
      <Button type="half" title="Run" onPress={onRun}/>
      <ViewerContent>
        <Subtitle><Subtitle green>A </Subtitle>= {result} cm²</Subtitle>
      </ViewerContent>
    </>
  );
};