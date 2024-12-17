import React, { useCallback } from 'react';
import { HeaderContainer } from './style/HeaderStyle';
import MenuItem from './MenuItem';
import HeaderIconSection from './HeaderIconSection';
import { useHeader } from '../../../stores/common/HeaderStore';
import Search from '../search/Search';

const Header = () => {
  const { keyword, setKeyword } = useHeader();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      window.location.href = `/searchResult/${keyword}`;
    },
    [keyword]
  );

  return (
    <HeaderContainer className="bold">
      <div className="header__menu">
        <img
          className="img__logo"
          onClick={() => {
            window.location = '/';
          }}
          src="/assets/logo.svg"
          alt="로고 이미지"
        />
        <MenuItem path="/" title="전체" />
        <MenuItem path="/watchlist" title="WatchList" />
        <MenuItem path="/welcome" title="리뷰왕" />
      </div>
      <div className="search__section">
        <Search val={keyword} setVal={setKeyword} handleClick={handleSubmit} />
      </div>
      <HeaderIconSection />
    </HeaderContainer>
  );
};

export default Header;
