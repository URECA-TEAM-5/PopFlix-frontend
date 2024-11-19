import React from 'react';
import { HeaderContainer } from './style/HeaderStyle';
import MenuItem from './MenuItem';

const Header = () => {
  return (
    <HeaderContainer className="bold">
      <img className="img__logo" href="/" src="/assets/logo.svg" alt="로고 이미지" />
      <div className="header__menu">
        <MenuItem path="/" title="전체" />
        <MenuItem path="/" title="WatchList" />
        <MenuItem path="/" title="리뷰왕" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
