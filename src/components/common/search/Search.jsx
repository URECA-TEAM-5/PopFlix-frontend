import React from 'react';
import { SearchSection } from './style/SearchStyle';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ val, setVal, placeholder, handleClick, bgColor, fontColor, fontSize, w, p }) => {
  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <SearchSection $bgColor={bgColor} $fontColor={fontColor} $width={w} $padding={p} $fontSize={fontSize}>
      <div className="search__main">
        <input
          className="input__section regular"
          type="text"
          placeholder={placeholder || '제목, 감독을 입력하세요.'}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={handleEnterClick}
        />
        <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} onClick={handleClick} />
      </div>
    </SearchSection>
  );
};

export default Search;
