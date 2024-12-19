import { faBoxArchive, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { Link, useParams } from 'react-router-dom';
import { Blank, BlankGap, ContentLine, CurrentFileDiv, EditBtnDiv, Input, InputFileDiv, StorageContent, StorageImage, Textarea, TiTleDiv } from './style/EditStorage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { updateStorage } from '../../api/mypage/myWatchList';
import { useAlert } from '../../stores/alert/AlertStore';
import AlertMessage from '../common/alert/AlertMessage';
import { chkUserInfo } from '../userInfo/modal/chkUserInfo';

const EditStorage = () => {
    const { id } = useParams();
    const { myWatchList } = useMyWatchList();

    const userId = chkUserInfo().userId;

    const watchListItem = myWatchList.find((list) => String(list.id) === String(id));

    const storageNameRef = useRef(watchListItem.storageName);
    const overviewRef = useRef(watchListItem.overview);
    const fileInputRef = useRef(null);

    const NAME_MAX_LENGTH = 30;
    const OVERVIEW_MAX_LENGTH = 100;
    const [storageImage, setStorageImage] = useState(null);

    const { handleAlertOpen, handleAlertClose } = useAlert();

    const handleInput = (e) => {
        const { name, value } = e.target;
        const maxLength = name === 'storageName' ? NAME_MAX_LENGTH : OVERVIEW_MAX_LENGTH;
        const limitedValue = value.slice(0, maxLength);

        if (name === 'storageName') {
            storageNameRef.current.value = limitedValue;
        } else if (name === 'overview') {
            overviewRef.current.value = limitedValue;
        }
    };

    const handleUpload = useCallback(
        (event) => {
            const file = event.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                setStorageImage(url);
            }
        },
        [setStorageImage]
    );

    useEffect(() => {
        return () => {
            if (storageImage) {
                URL.revokeObjectURL(storageImage);
            }
        };
    }, [storageImage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storageName = storageNameRef.current.value;
        const overview = overviewRef.current.value;
        const file = fileInputRef.current?.files[0];

        const formData = new FormData();
        formData.append('storageImage', file);

        try {
            await updateStorage(id, userId, storageName, overview, formData);
            handleAlertOpen('success', '보관함이 수정되었습니다.');
        } catch (error) {
            console.error('Error:', error);
            handleAlertOpen('error', '수정에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <>
            <AlertMessage
                type={''}
                message={''}
                handleClose={() => handleAlertClose()}
            />
            <TiTleDiv>
                <span className="title extra-bold">✏️ WatchList 폴더를 수정해주세요</span>
                <Link to="/mypage"><button className="bold">X</button></Link>
            </TiTleDiv>
            <StorageContent>
                <div className="storageImgDiv" onClick={() => fileInputRef.current?.click()}>
                    {storageImage ? (
                        <StorageImage src={storageImage} alt="보관함 이미지" />
                    ) : (
                        watchListItem.storageImage ? (
                            <CurrentFileDiv>
                                <img className="currentImg" src={watchListItem.storageImage} alt="기존 이미지" loading="lazy" />
                            </CurrentFileDiv>
                        ) : (
                            <InputFileDiv>
                                <img className="cameraIcon" src="/assets/camera.svg" alt="파일 업로드 아이콘" />
                            </InputFileDiv>
                        )
                    )}
                    <input className="fileInput" type="file" accept="image/*" ref={fileInputRef} onChange={handleUpload} />
                </div>
                <BlankGap></BlankGap>
                <FontAwesomeIcon icon={faBoxArchive} />
                <span className="bold semiTitle"> 제목</span>
                <Blank></Blank>
                <Input
                    type="text"
                    ref={storageNameRef}
                    name="storageName"
                    defaultValue={watchListItem.storageName}
                    onChange={handleInput}
                    className="regular"
                />
                <BlankGap></BlankGap>
                <div>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <span className="bold semiTitle"> 소개글</span>
                    <Blank></Blank>
                    <Textarea
                        ref={overviewRef}
                        name="overview"
                        defaultValue={watchListItem.overview}
                        onChange={handleInput}
                        className="regular"
                    />
                </div>
            </StorageContent>
            <EditBtnDiv>
                <button className="regular" onClick={handleSubmit}>수정하기</button>
            </EditBtnDiv>
            <BlankGap></BlankGap>
            <ContentLine></ContentLine>
        </>
    );
};

export default EditStorage;