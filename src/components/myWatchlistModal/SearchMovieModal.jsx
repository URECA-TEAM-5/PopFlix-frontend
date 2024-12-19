import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { colors } from '../../global/globalStyle';
import Search from '../common/search/Search';
import { BtnDiv, DiaglogBtn, DiaglogContent } from './style/NewFolderModal';

const SearchMovieModal = ({ open, setOpen }) => {
    const [keyword, setKeyword] = useState('');

    const handleClose = (e) => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(keyword);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
                style: {
                    backgroundColor: `${colors.navy_gray}`,
                    color: `${colors.white}`
                }
            }}
        >
            <DiaglogContent>
                <h3>영화 저장</h3>
                <Search
                    val={keyword}
                    setVal={setKeyword}
                    handleClick={handleSubmit}
                    fontSize={1}
                />
            </DiaglogContent>
            <BtnDiv className="bold">
                <DiaglogBtn onClick={handleClose}>취소</DiaglogBtn>
                <DiaglogBtn type="submit">저장하기</DiaglogBtn>
            </BtnDiv>
        </Dialog >
    );
};

export default SearchMovieModal;