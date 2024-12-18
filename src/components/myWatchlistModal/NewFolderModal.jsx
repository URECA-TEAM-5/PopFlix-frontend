import React, { useRef, useState } from 'react';
import { Dialog } from '@mui/material';
import { BtnDiv, DiaglogBtn } from './style/NewFolderModal';
import { colors } from '../../global/globalStyle';
import NewFolderInput from './NewFolderInput';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { postNewFolder } from '../../api/mypage/myWatchList';

const NewFolderModal = ({ open, setOpen }) => {
    const { setMyWatchList } = useMyWatchList();
    const [error, setError] = useState();
    const [storageNameLength, setStorageNameLength] = useState(0);
    const [storageOverviewLength, setStorageOverviewLength] = useState(0);
    const storageNameRef = useRef(null);
    const storageOverviewRef = useRef(null);

    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    const NAME_MAX_LENGTH = 30;
    const OVERVIEW_MAX_LENGTH = 100;

    const handleClose = (e) => {
        if (e) e.preventDefault();
        setError('');
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storageName = storageNameRef.current.value;
        const storageOverview = storageOverviewRef.current.value;

        if (!storageName || !storageOverview) {
            setError('내용을 입력해주세요.');
            return;
        }
        console.log('이름:', storageName, '소개:', storageOverview);
        setError('');

        const folderData = {
            userId: userId,
            storageName: storageName,
            storageOverview: storageOverview,
            storageImage: null,
        };

        try {
            const result = await postNewFolder(folderData);
            if (result) {
                handleClose();
                setMyWatchList(userId);
            }
        } catch (error) {
            setError('폴더 생성에 실패했어요.');
            console.error('폴더 생성 오류:', error);
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setError('');
        const maxLength = name === 'storageName' ? NAME_MAX_LENGTH : OVERVIEW_MAX_LENGTH;
        const limitedValue = value.slice(0, maxLength);
        if (name === 'storageName') {
            setStorageNameLength(limitedValue.length);
            storageNameRef.current.value = limitedValue;
        } else if (name === 'storageOverview') {
            setStorageOverviewLength(limitedValue.length);
            storageOverviewRef.current.value = limitedValue;
        }
    };

    return (
        <>
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
                <NewFolderInput
                    storageNameRef={storageNameRef}
                    storageOverviewRef={storageOverviewRef}
                    error={error}
                    NAME_MAX_LENGTH={NAME_MAX_LENGTH}
                    OVERVIEW_MAX_LENGTH={OVERVIEW_MAX_LENGTH}
                    handleInput={handleInput}
                    storageNameLength={storageNameLength}
                    storageOverviewLength={storageOverviewLength}
                />
                <BtnDiv className="bold">
                    <DiaglogBtn type="button" onClick={handleClose}>취소</DiaglogBtn>
                    <DiaglogBtn type="submit">생성하기</DiaglogBtn>
                </BtnDiv>
            </Dialog>
        </>
    );
};

export default NewFolderModal;