import React from 'react';
import { DefaultBadgeContainer } from './style/BadgeStyle';

const DefaultBadge = ({ title, w, h, fontSize, fontColor, bgColor, fontWeight }) => {
  return (
    <>
      <DefaultBadgeContainer className={`badge ${fontWeight}`} $fontSize={fontSize} $fontColor={fontColor} $bgColor={bgColor} $width={w} $height={h}>
        <div className="badge__default">{title}</div>
      </DefaultBadgeContainer>
    </>
  );
};

export default DefaultBadge;
