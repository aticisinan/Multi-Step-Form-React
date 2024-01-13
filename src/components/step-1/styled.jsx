import styled, { css } from "styled-components";

export const Step1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid var(--light-gray);
  border-radius: 10px;
  color: var(--marine-blue);
  font-weight: 700;
  transition: border-color 200ms ease;

  &:hover {
    border-color: var(--marine-blue);
    cursor: pointer;
  }

  &::placeholder {
    color: var(--cool-gray);
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  ${Input} {
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: var(--strawberry-red);
      `}
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--strawberry-red);
  font-weight: 700;
  font-size: 14px;
`;
