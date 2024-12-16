import React, { useEffect, useRef } from 'react';
import SearchMessage from '../../components/searchResult/SearchMessage';
import { ResultWrapper } from '../../components/searchResult/style/SearchResultStyle';
import SearchResultList from '../../components/searchResult/SearchResultList';
import { useParams } from 'react-router-dom';
import { useSearch } from '../../stores/search/useSearch';

const SearchResult = () => {
  const { keyword } = useParams();
  const { searchByKeyword } = useSearch();
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      searchByKeyword(keyword);
    }
  }, [isLoaded]);

  return (
    <ResultWrapper className="result-wrapper">
      <SearchMessage keyword={keyword} />
      <SearchResultList />
    </ResultWrapper>
  );
};

export default SearchResult;
