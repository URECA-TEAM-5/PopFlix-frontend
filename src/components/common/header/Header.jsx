import React from 'react';
import { HeaderContainer } from './style/HeaderStyle';
import MenuItem from './MenuItem';
import HeaderIconSection from './HeaderIconSection';
import { useHeader } from '../../../stores/common/HeaderStore';
import Search from '../search/Search';

const Header = () => {
  const { keyword, setKeyword } = useHeader();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(keyword);
  };

  return (
    <HeaderContainer className="bold">
      <img
        className="img__logo"
        onClick={() => {
          window.location = '/';
        }}
        src="/assets/logo.svg"
        alt="로고 이미지"
      />
      <div className="header__menu">
        <MenuItem path="/" title="전체" />
        <MenuItem path="/watchlist" title="WatchList" />
        <MenuItem path="/" title="리뷰왕" />
      </div>
      <Search val={keyword} setVal={setKeyword} handleClick={handleSubmit} />
      <HeaderIconSection />
    </HeaderContainer>
  );
};

export default Header;
