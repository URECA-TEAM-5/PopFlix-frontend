import React, { useCallback } from 'react';
import { HeaderContainer } from './style/HeaderStyle';
import MenuItem from './MenuItem';
import HeaderIconSection from './HeaderIconSection';
import { useHeader } from '../../../stores/common/HeaderStore';
import Search from '../search/Search';

const Header = () => {
  const { keyword, setKeyword } = useHeader();

  const handleSubmit = useCallback(async () => {
    window.location.href = `/searchResult/${keyword}`;
  }, [keyword]);

  return (
    <HeaderContainer className="bold">
      <div className="header__menu">
        <img
          className="img__logo"
          onClick={() => {
            window.location = '/main';
          }}
          src="/assets/logo.svg"
          alt="로고 이미지"
        />
        <MenuItem path="/main" title="전체" />
        <MenuItem path="/watchlist" title="WatchList" />
      </div>
      <div className="search__section">
        <Search val={keyword} setVal={setKeyword} handleClick={handleSubmit} />
      </div>
      <HeaderIconSection />
    </HeaderContainer>
  );
};

export default Header;
