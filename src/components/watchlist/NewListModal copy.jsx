import React, { useCallback, useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn, DiaglogContent, ErrorDiv, InputLength, InputText, InputTextArea } from './style/NewListModal';
import { colors } from '../../global/globalStyle';
import NewListInput from './NewListInput';

const NewListModal = () => {
    const [open, setOpen] = useState(true);
    const [storage_name, setStorage_name] = useState('');
    const [storage_info, setStorage_info] = useState('');
    const [error, setError] = useState('');

    const NAME_MAX_LENGTH = 30;
    const INFO_MAX_LENGTH = 100;

    const handleClickOpen = () => setOpen(true);
    const handleClose = (e) => {
        if (e) e.preventDefault();
        setError('');
        setOpen(false);
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        if (name === 'storage_name') {
            setStorage_name(value.slice(0, NAME_MAX_LENGTH));
        } else if (name === 'storage_info') {
            setStorage_info(value.slice(0, INFO_MAX_LENGTH));
        }
        setError('');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    color: `${colors.white}`,
                }
            }}
        >
            <NewListInput
                storage_name={storage_name}
                storage_info={storage_info}
                handleChange={handleChange}
                error={error}
                NAME_MAX_LENGTH={NAME_MAX_LENGTH}
                INFO_MAX_LENGTH={INFO_MAX_LENGTH}
            />
            <BtnDiv className="bold">
                <DiaglogBtn type="button" onClick={handleClose}>취소</DiaglogBtn>
                <DiaglogBtn type="submit">생성하기</DiaglogBtn>
            </BtnDiv>
        </Dialog>
    );
};

export default NewListModal;