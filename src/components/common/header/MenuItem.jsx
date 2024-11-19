import React from 'react';
import { useHeader } from '../../../stores/common/HeaderStore';
import { colors } from '../../../global/globalStyle';
import { HeaderMenuItem } from './style/HeaderStyle';

const MenuItem = ({ path, title }) => {
  const { category, setCategory } = useHeader();
  return (
    <HeaderMenuItem href={path} onClick={() => setCategory(title)} $fontColor={category === title && colors.orange}>
      {title}
    </HeaderMenuItem>
  );
};

export default MenuItem;
