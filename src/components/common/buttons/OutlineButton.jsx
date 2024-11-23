import React from 'react';
import { ButtonSection } from './style/ButtonStyle';

const OutlineButton = ({ name, onClick, w, h, borderColor, bgColor, fontSize, fontColor }) => {
  return (
    <ButtonSection $width={w} $height={h} $borderColor={borderColor} $bgColor={bgColor} $fontSize={fontSize} $fontColor={fontColor}>
      <div className="button__outline regular" onClick={onClick}>
        {name}
      </div>
    </ButtonSection>
  );
};

export default OutlineButton;
