import React, { useRef, useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn } from '../style/NewListModal';
import { colors } from '../../../global/globalStyle';
import NewListInput from './NewListInput';

const NewListModal = ({ open, setOpen, onCreateList }) => {
    const [error, setError] = useState();
    const [storageNameLength, setStorageNameLength] = useState(0);
    const [storageInfoLength, setStorageInfoLength] = useState(0);
    const storageNameRef = useRef(null);
    const storageInfoRef = useRef(null);

    const NAME_MAX_LENGTH = 30;
    const INFO_MAX_LENGTH = 100;

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

        onCreateList({ storage_name });

        handleClose();
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setError('');
        const maxLength = name === 'storage_name' ? NAME_MAX_LENGTH : INFO_MAX_LENGTH;
        const limitedValue = value.slice(0, maxLength);
        if (name === 'storage_name') {
            setStorageNameLength(limitedValue.length);
            storageNameRef.current.value = limitedValue;
        } else if (name === 'storage_info') {
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