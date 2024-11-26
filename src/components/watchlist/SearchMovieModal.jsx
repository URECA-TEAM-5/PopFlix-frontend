import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn, DiaglogContent, ErrorDiv, InputLength, InputText, InputTextArea } from './style/NewListModal';
import { colors } from '../../global/globalStyle';

const SearchMovieModal = () => {
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({
        storage_name: '',
        storage_info: ''
    });
    const [error, setError] = useState('');

    const NAME_MAX_LENGTH = 30;
    const INFO_MAX_LENGTH = 100;

    const handleClickOpen = () => setOpen(true);
    const handleClose = (e) => {
        if (e) e.preventDefault();

        setFormData({
            storage_name: '',
            storage_info: ''
        });
        setError('');
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value.slice(0, name === 'storage_name' ? NAME_MAX_LENGTH : INFO_MAX_LENGTH)
        }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { storage_name, storage_info } = formData;
        if (!storage_name || !storage_info) {
            setError('내용을 입력해주세요.');
            return;
        }

        console.log('이름:', storage_name, '소개:', storage_info);
        setError('');
        handleClose();
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
            </DiaglogContent>
            <BtnDiv className="bold">
                <DiaglogBtn onClick={handleClose}>취소</DiaglogBtn>
                <DiaglogBtn type="submit">저장하기</DiaglogBtn>
            </BtnDiv>
        </Dialog >
    );
};

export default SearchMovieModal;