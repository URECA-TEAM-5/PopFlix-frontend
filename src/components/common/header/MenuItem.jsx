import React from 'react';
import { useHeader } from '../../../stores/common/HeaderStore';
import { colors } from '../../../global/globalStyle';
import { HeaderMenuItem } from './style/HeaderStyle';
import { Link } from 'react-router-dom';

const MenuItem = ({ path, title }) => {
  const { category, setCategory } = useHeader();
  return (
    <>
      <HeaderMenuItem onClick={() => setCategory(title)} $fontColor={category === title && colors.orange}>
        <Link className="text" to={path}>
          {title}
        </Link>
      </HeaderMenuItem>
    </>
  );
};

export default MenuItem;
