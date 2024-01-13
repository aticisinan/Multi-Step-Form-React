import React, { useState } from "react";
import Step from "../step";
import FormJSON from "../../form.json";

import * as S from "./styled";

const { step3 } = FormJSON;

function Step3({ onStepSubmit, formData, ...props }) {
  const { billingType } = formData.step2;

  const [selectedAddons, setSelectedAddons] = useState([]);

  const changeAddons = (checked, newAddons) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, newAddons]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddons.id)
      );
    }
  };

  const onSubmit = () => {
    onStepSubmit("step3", "step4", {
      selectedAddons,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item
            key={item.id}
            isSelected={selectedAddons.some((i) => i.id === item.id)}
          >
            <S.Input
              type="checkbox"
              onChange={(e) => changeAddons(e.target.checked, item)}
            />
            <S.InputBody>
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.description}</S.Subtitle>
            </S.InputBody>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </Step>
  );
}

export default Step3;
