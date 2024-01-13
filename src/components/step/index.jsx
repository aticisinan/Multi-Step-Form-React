import React from "react";
import * as S from "./styled";

function Step({
  handleSubmit,
  onBack,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}) {
  return (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && <S.GoBackButton onClick={onBack}>GoBack</S.GoBackButton>}
        {hasNextButton ? (<S.GoNextButton type="submit">GoNext</S.GoNextButton>)
        :<S.GoNextButton type="submit">Confirm</S.GoNextButton>
        }
      </S.StepFooter>
    </S.Step>
  );
}

export default Step;
