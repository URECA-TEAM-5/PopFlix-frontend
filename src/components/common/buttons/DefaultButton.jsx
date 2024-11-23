import React from 'react';
import { ButtonSection } from './style/ButtonStyle';

const DefaultButton = ({ name, onClick, w, h, bgColor, fontSize, fontColor }) => {
  return (
    <ButtonSection $width={w} $height={h} $bgColor={bgColor} $fontSize={fontSize} $fontColor={fontColor}>
      <button className="button__default" onClick={onClick}>
        {name}
      </button>
    </ButtonSection>
  );
};

export default DefaultButton;
