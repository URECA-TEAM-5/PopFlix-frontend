import React from 'react';
import { HeaderContainer } from './style/HeaderStyle';
import MenuItem from './MenuItem';
import HeaderIconSection from './HeaderIconSection';
import { useHeader } from '../../../stores/common/HeaderStore';
import Search from '../search/Search';
import { useSearch } from '../../../stores/search/useSearch';

const Header = () => {
  const { keyword, setKeyword } = useHeader();
  const { searchByKeyword } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(keyword);
    searchByKeyword(keyword);
  };

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
        <MenuItem path="/" title="리뷰왕" />
      </div>
      <div className="search__section">
        <Search val={keyword} setVal={setKeyword} handleClick={handleSubmit} />
      </div>
      <HeaderIconSection />
    </HeaderContainer>
  );
};

export default Header;
