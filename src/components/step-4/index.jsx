import React from "react";
import Step from "../step";

import * as S from "./styled";

function Step4({ formData, ...props }) {
  return (
    <Step {...props}>
      <S.Step4>
        <S.MainRow>
          <S.Title>
            {formData.step2.plan.title} ({formData.step2.billingType})
          </S.Title>
          <S.Price>{formData.step2.plan.price}</S.Price>
        </S.MainRow>
        {formData.step3.selectedAddons.length > 0 &&
          formData.step3.selectedAddons.map((item) => (
            <S.SubRow key={item.id}>
              <S.Title>{item.title}</S.Title>
              <S.Price>{item.price}</S.Price>
            </S.SubRow>
          ))}
        <S.TotalRow>
          <S.Title>Total (per {formData.step2.billingType})</S.Title>
          <S.TotalAmount>
            +${formData.step3.selectedAddons.reduce(
              (acc, curr) => acc + curr.priceAmount,
              formData.step2.plan.priceAmount
            )}
            /{formData.step2.billingType === "monthly" ? "mo" : "yr"}
          </S.TotalAmount>
        </S.TotalRow>
      </S.Step4>
    </Step>
  );
}

export default Step4;
