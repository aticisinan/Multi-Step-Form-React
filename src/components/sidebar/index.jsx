import React from "react";
import { Items } from "./constant";
import * as S from "./styled";

function Sidebar({activeStep}) {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id} isActive = {activeStep === item.id} >
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.Subtitle>{item.subtitle}</S.Subtitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  );
}

export default Sidebar;
