import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { Link, useParams } from 'react-router-dom';
import { Blank, BlankGap, ContentLine, EditBtnDiv, Input, StorageContent, Textarea, TiTleDiv } from './style/EditStorage';
import { useRef } from 'react';
import { updateStorage } from '../../api/mypage/myWatchList';

const EditStorage = () => {
    const { myWatchList } = useMyWatchList();
    const { id } = useParams();

    const watchListItem = myWatchList.find((list) => String(list.id) === String(id));

    const storageNameRef = useRef(watchListItem.storageName);
    const storageOverviewRef = useRef(watchListItem.storageOverview);

    const NAME_MAX_LENGTH = 30;
    const OVERVIEW_MAX_LENGTH = 100;

    const handleInput = (e) => {
        const { name, value } = e.target;
        const maxLength = name === 'storageName' ? NAME_MAX_LENGTH : OVERVIEW_MAX_LENGTH;
        const limitedValue = value.slice(0, maxLength);

        if (name === 'storageName') {
            storageNameRef.current.value = limitedValue;
        } else if (name === 'storageOverview') {
            storageOverviewRef.current.value = limitedValue;
        }
    };

    const handleSubmit = async () => {
        const storageName = storageNameRef.current.value;
        const storageOverview = storageOverviewRef.current.value;
        console.log('이름:', storageName, '소개:', storageOverview);
        try {
            const response = await updateStorage(id, storageName, storageOverview);
            console.log('성공:', response);
            alert("제목, 소개글이 수정되었습니다.");
        } catch (error) {
            console.error('Error:', error);
            alert("수정에 실패했습니다. 다시 시도해주세요.");
        }
    };

    console.log(watchListItem);

    return (
        <>
            <TiTleDiv>
                <h4>영화 수정</h4>
                <Link to="/mypage"><button className="bold">취소</button></Link>
            </TiTleDiv>
            <StorageContent>
                <FontAwesomeIcon icon={faMicrophone} />
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
                        ref={storageOverviewRef}
                        name="storageOverview"
                        defaultValue={watchListItem.storageOverview}
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