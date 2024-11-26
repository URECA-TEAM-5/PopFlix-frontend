import React, { useCallback, useRef, useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn } from './style/NewListModal';
import { colors } from '../../global/globalStyle';
import NewListInput from './NewListInput';

const NewListModal = () => {
    const [open, setOpen] = useState(true);
    const [error, setError] = useState();
    const [storageNameLength, setStorageNameLength] = useState(0);
    const [storageInfoLength, setStorageInfoLength] = useState(0);
    const storageNameRef = useRef(null);
    const storageInfoRef = useRef(null);

    const NAME_MAX_LENGTH = 30;
    const INFO_MAX_LENGTH = 100;

    const handleClickOpen = () => setOpen(true);
    const handleClose = (e) => {
        if (e) e.preventDefault();
        setError('');
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storage_name = storageNameRef.current.value;
        const storage_info = storageInfoRef.current.value;
        if (!storage_name || !storage_info) {
            setError('내용을 입력해주세요.');
            return;
        }
        console.log('이름:', storage_name, '소개:', storage_info);
        setError('');
        handleClose();
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setError('');
        if (name === 'storage_name') {
            const limitedValue = value.slice(0, NAME_MAX_LENGTH);
            setStorageNameLength(limitedValue.length);
            storageNameRef.current.value = limitedValue;
        } else if (name === 'storage_info') {
            const limitedValue = value.slice(0, INFO_MAX_LENGTH);
            setStorageInfoLength(limitedValue.length);
            storageInfoRef.current.value = limitedValue;
        }
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
                    color: `${colors.white}`,
                }
            }}
        >
            <NewListInput
                storageNameRef={storageNameRef}
                storageInfoRef={storageInfoRef}
                error={error}
                NAME_MAX_LENGTH={NAME_MAX_LENGTH}
                INFO_MAX_LENGTH={INFO_MAX_LENGTH}
                handleInput={handleInput}
                storageNameLength={storageNameLength}
                storageInfoLength={storageInfoLength}
            />
            <BtnDiv className="bold">
                <DiaglogBtn type="button" onClick={handleClose}>취소</DiaglogBtn>
                <DiaglogBtn type="submit">생성하기</DiaglogBtn>
            </BtnDiv>
        </Dialog>
    );
};

export default NewListModal;