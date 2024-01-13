import React from "react";
import Step from "../step";
import FormsJSON from "../../form.json";

import * as S from "./styled";

function Step1({ onStepSubmit, ...props }) {
  const { step1 } = FormsJSON;
  const hasError = false;

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProperties = Object.fromEntries(formData);

    onStepSubmit("step1", "step2", formProperties);
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={hasError}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
            {hasError && (
              <S.ErrorMessage>This filed is required</S.ErrorMessage>
            )}
          </S.FormItem>
        ))}
      </S.Step1>
    </Step>
  );
}

export default Step1;
