import styled, { css } from "styled-components";

const rowCommonCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h4`
  color: var(--cool-gray);
`;

export const MainRow = styled.div`
  ${rowCommonCss}
  background-color: var(--magnolia);
  border-bottom: 1px solid var(--light-gray);
  padding: 24px;

  ${Title} {
    color: var(--marine-blue);
    font-weight: 500;
  }
`;

export const SubRow = styled.div`
  ${rowCommonCss}
  padding: 12px 24px;
`;

export const TotalRow = styled.div`
  ${rowCommonCss}
  padding: 12px 24px;
  border-top: 1px solid var(--light-gray);
`;

export const Price = styled.h6``;

export const TotalAmount = styled.h3`
  padding: 24px;
  font-weight: 700;
  font-size: 24px;
  color: var(--purplish-blue);
`;
