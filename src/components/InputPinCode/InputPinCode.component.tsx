import React, { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import {
  Container,
  Indicator,
  Feedback,
  Value,
  Spinner,
  SpinnerAndroid,
  Hiddeninput,
  Pressable,
  KeyView,
  ErrorText,
} from "./InputPinCode.styles";

import { InputPinCodeProps } from "./InputPinCode.types";
import colors from "../../styles/colors";
import { isIos } from "../../helpers";

export const InputPinCode: React.FC<InputPinCodeProps> = (props) => {
  const {
    size, value, loading, onChange, onFinish, secure, error, autofocus,
  } = props;

  const codeDigitsArray = new Array(size).fill(0);
  const ref = useRef<any>(null);
  let hasErrors = Boolean(error);
  const [showErrors, setShowErrors] = useState<boolean>(true);

  const handleOnPress = () => ref?.current?.focus();
  const clearInput = () => ref?.current?.clear();

  useEffect(() => {
    if (onFinish && value.length === size) onFinish(value);
    if (value.length < size) { setShowErrors(false); hasErrors = false; }
    if (value === "") clearInput();
  }, [value]);

  useEffect(() => {
    if (hasErrors && value.length === size) setShowErrors(true);
  }, [hasErrors, value]);

  // Snazzy Input logic
  const toDigitInput = (_value: number, idx: number) => {
    const digit = [...value][idx];
    const isEven = idx === 3;
    const isDivisibleBy3 = size % 3 === 0;

    return (
      <KeyView
        key={idx}
        style={{ marginLeft: isEven && isDivisibleBy3 ? 15 : 10 }}
        loading={loading}
      >
        <Value secure={secure}>{secure && digit ? "•" : digit}</Value>

        {idx === value.length && <Indicator />}
          
        {hasErrors && showErrors && <Indicator color={colors.danger} />}
          
      </KeyView>
    );
  };

  return (
    <>
      <Container>

        {loading && Platform.OS === "ios" && <Spinner />}

        {loading && Platform.OS === "android" && <SpinnerAndroid />}        

        <Pressable onPress={handleOnPress}>
          {codeDigitsArray.map(toDigitInput)}
        </Pressable>

        <Hiddeninput
          ref={ref}
          multiline={isIos()}
          autoFocus={autofocus}
          maxLength={size}
          secureTextEntry={secure}
          onChangeText={onChange}
          selectTextOnFocus={false}
          keyboardType="number-pad"
          returnKeyType="default"
        />
      </Container>
      {hasErrors && showErrors ? (
        <Feedback>
          <ErrorText>
            {error}
          </ErrorText>
        </Feedback>
      ) : null}
        

    </>
  );
};
