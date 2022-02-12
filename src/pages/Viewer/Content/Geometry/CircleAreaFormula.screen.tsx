import React, { useState } from "react";
import { Button, InputFormula } from "../../../../components";
import { circleAreaFormula } from "../../../../functions";
import { HeadingSmall, Paragraph, Subtitle } from "../../../../styles";
import { InputWrapper } from "../../Viewer.styles";

export const CircleAreaFormula: React.FC = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | number>();
  const onRun = () => setResult(`${circleAreaFormula(Number(value))} cm²`);

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
        π = 3.14159
      </Paragraph>
      <Paragraph textAlign="center" marginTop={10} italic>
        r = radius
      </Paragraph>
      <Subtitle textAlign="center" marginTop={20}>
        Fill in the formula to get the results.
      </Subtitle>
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
      <HeadingSmall textAlign="center" marginTop={20}>{result}</HeadingSmall>
    </>
  );
};