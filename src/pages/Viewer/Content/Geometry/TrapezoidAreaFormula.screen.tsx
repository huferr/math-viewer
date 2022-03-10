import React, { useEffect, useRef, useState } from "react";
import { Button, InputFormula } from "~/components";
import { trapezoidAreaFormula } from "~/services";
import { HeadingSmall, Paragraph, Subtitle } from "~/styles/typography";
import { useAddMathscore } from "~graphql/mutations/useAddMathscore";
import { InputWrapper, ViewerContent } from "../../Viewer.styles";

export const TrapezoidAreaFormula: React.FC = () => {
  const [value, setValue] = useState({ height: "", base1: "", base2: ""});
  const [result, setResult] = useState<string | number>();

  const { mutateAsync: addMathscore } = useAddMathscore();
  
  const bInputRef = useRef<any>(null);
  const hInputRef = useRef<any>(null);
  
  const base1 = Number(value.base1.replace(",", "."));
  const base2 = Number(value.base2.replace(",", "."));
  const height = Number(value.height.replace(",", "."));

  const onRun = () => setResult(trapezoidAreaFormula(base1, base2, height));

  useEffect(() => {
    (async () => {
      if(typeof result === "number") {
        try {
          await addMathscore({
            amount: 25
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
    })();
  }, [result]);

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
        <InputFormula
          value={value.base1}
          onChangeText={(t) => setValue({...value, base1: t})}
          onSubmitEditing={() => bInputRef?.current?.focus()}
        />
        <HeadingSmall bold> + </HeadingSmall>
        <InputFormula
          inputRef={bInputRef}
          value={value.base2}
          onChangeText={(t) => setValue({...value, base2: t})}
          onSubmitEditing={() => hInputRef?.current?.focus()}
        />
        <HeadingSmall bold> ) * </HeadingSmall>
        <InputFormula
          inputRef={hInputRef}
          value={value.height}
          onChangeText={(t) => setValue({...value, height: t})}
        />
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