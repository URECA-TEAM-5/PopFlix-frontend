import { faBoxArchive, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { Link, useParams } from 'react-router-dom';
import { Blank, BlankGap, ContentLine, EditBtnDiv, Input, InputFileDiv, StorageContent, StorageImage, Textarea, TiTleDiv } from './style/EditStorage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { updateStorage } from '../../api/mypage/myWatchList';

const EditStorage = () => {
    const { myWatchList } = useMyWatchList();
    const { id } = useParams();
    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    const watchListItem = myWatchList.find((list) => String(list.id) === String(id));
    const storageNameRef = useRef(watchListItem.storageName);
    const overviewRef = useRef(watchListItem.overview);
    const fileInputRef = useRef(null);
    const [storageImage, setStorageImage] = useState(null);
    const NAME_MAX_LENGTH = 30;
    const OVERVIEW_MAX_LENGTH = 100;

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

    const handleSubmit = async () => {
        const storageName = storageNameRef.current.value;
        const overview = overviewRef.current.value;
        const file = fileInputRef.current?.files[0];

        const formData = new FormData();
        formData.append('newName', storageName);
        formData.append('newOverview', overview);
        formData.append('newStorageImage', file);

        try {
            const response = await updateStorage(id, userId, formData);
            console.log('결과:', response);
            alert("제목, 소개글이 수정되었습니다.");
        } catch (error) {
            console.error('Error:', error);
            alert("수정에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <>
            <TiTleDiv>
                <h4>WatchList 수정</h4>
                <Link to="/mypage"><button className="bold">취소</button></Link>
            </TiTleDiv>
            <StorageContent>
                <div className="storageImgDiv" onClick={() => fileInputRef.current?.click()}>
                    {storageImage ? (
                        <StorageImage src={storageImage} alt="보관함 이미지" />
                    ) : (
                        <InputFileDiv>
                            <img className="cameraIcon" src="/assets/camera.svg" alt="파일 업로드 아이콘" />
                        </InputFileDiv>
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
                <button onClick={handleSubmit}>Edit</button>
            </EditBtnDiv>
            <ContentLine></ContentLine>
        </>
    );
};

export default EditStorage;