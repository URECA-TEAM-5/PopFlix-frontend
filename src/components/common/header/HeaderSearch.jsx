import React from 'react';
import { HeaderSearchSection } from './style/HeaderStyle';
import { useHeader } from '../../../stores/common/HeaderStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderSearch = () => {
  const { keyword, setKeyword } = useHeader();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(keyword);
  };

  return (
    <HeaderSearchSection>
      <div className="search__container">
        <input
          className="input__section regular"
          type="text"
          placeholder="제목, 감독을 입력하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} onClick={handleSubmit} />
      </div>
    </HeaderSearchSection>
  );
};

export default HeaderSearch;
