import React, { useState } from "react";
import { Button, InputFormula } from "../../../../components";
import { trapezoidAreaFormula, triangleAreaFormula } from "../../../../functions";
import { HeadingSmall, Paragraph, Subtitle } from "../../../../styles";
import { InputWrapper, ViewerContent } from "../../Viewer.styles";

export const TrapezoidAreaFormula: React.FC = () => {
  const [value, setValue] = useState({ height: "", base1: "", base2: ""});
  const [result, setResult] = useState<string | number>();

  const base1 = Number(value.base1.replace(",", "."));
  const base2 = Number(value.base2.replace(",", "."));
  const height = Number(value.height.replace(",", "."));

  const onRun = () => setResult(trapezoidAreaFormula(base1, base2, height));

  return (
    <>
      <HeadingSmall 
        green
        italic
        textAlign="center"
        marginTop={20}  
      >
      Trapezoid Area Formula
      </HeadingSmall>
      <HeadingSmall bold marginTop={20}>
        <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        = ½ ( a + b ) * h
      </HeadingSmall>
      <Paragraph textAlign="center" marginTop={20} italic>
        a = base
      </Paragraph>
      <Paragraph textAlign="center" marginTop={10} italic>
        b = base
      </Paragraph>
      <Paragraph textAlign="center" marginTop={10} italic>
        h = height
      </Paragraph>
      <Subtitle  marginTop={20} marginBottom={20}>
        <Subtitle textAlign="center" green>Obs.: </Subtitle>let’s use<Subtitle green> centimeters</Subtitle> as the unit of measurement.
      </Subtitle>
      <InputWrapper>
        <HeadingSmall green bold textAlign="center">A </HeadingSmall>
        <HeadingSmall bold> = ½ ( </HeadingSmall>
        <InputFormula value={value.base1} onChangeText={(t) => setValue({...value, base1: t})}/>
        <HeadingSmall bold> + </HeadingSmall>
        <InputFormula value={value.base2} onChangeText={(t) => setValue({...value, base2: t})}/>
        <HeadingSmall bold> ) * </HeadingSmall>
        <InputFormula value={value.height} onChangeText={(t) => setValue({...value, height: t})}/>
      </InputWrapper>
      <Button type="half" title="Run" onPress={onRun}/>
      <ViewerContent>
        {typeof result === "number" ? <Subtitle><Subtitle green>A </Subtitle>= {result} cm²</Subtitle> 
          : <Subtitle>{result}</Subtitle>  
        }
      </ViewerContent>
    </>
  );
};