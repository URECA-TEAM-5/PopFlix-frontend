import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn, DiaglogContent, ErrorDiv, InputLength, InputText, InputTextArea } from './style/NewListModal';
import { colors } from '../../global/globalStyle';

const NewListModal = () => {
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
                <h3>WatchList 폴더를 생성해주세요.</h3>
                <ErrorDiv>
                    {error && <span className="bold">{error}</span>}
                </ErrorDiv>
                <InputText
                    className="regular"
                    id="name"
                    name="storage_name"
                    maxLength={NAME_MAX_LENGTH}
                    type="text"
                    placeholder="제목을 입력해주세요"
                    value={formData.storage_name}
                    onChange={handleChange}
                />
                <InputLength>
                    <span>{formData.storage_name.length}</span>
                    <span>/{NAME_MAX_LENGTH}자</span>
                </InputLength>
                <InputTextArea
                    className="regular"
                    id="storage_info"
                    name="storage_info"
                    maxLength={INFO_MAX_LENGTH}
                    placeholder="소개글을 입력해주세요"
                    value={formData.storage_info}
                    onChange={handleChange}
                    type="text"
                />
                <InputLength>
                    <span>{formData.storage_info.length}</span>
                    <span>/{INFO_MAX_LENGTH}자</span>
                </InputLength>
            </DiaglogContent>
            <BtnDiv className="bold">
                <DiaglogBtn onClick={handleClose}>취소</DiaglogBtn>
                <DiaglogBtn type="submit">생성하기</DiaglogBtn>
            </BtnDiv>
        </Dialog >
    );
};

export default NewListModal;