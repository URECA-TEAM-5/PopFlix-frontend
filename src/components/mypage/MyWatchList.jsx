import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { ImageGrid, OpacityDiv, Placeholder, PosterImage, TitleDiv, ToggleDiv, WatchListContainer, WatchListItem, WatchListItemDiv } from './style/MyWatchList';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { Link } from 'react-router-dom';
import NewFolderModal from '../myWatchlistModal/NewFolderModal';
import { deleteMyWatchList } from '../../api/mypage/myWatchList';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AlertMessage from '../common/alert/AlertMessage';
import { useAlert } from '../../stores/alert/AlertStore';
import Loading from '../common/loading/Loading';
import EmptyResult from '../common/emptyResult/EmptyResult';

const MyWatchList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { handleAlertOpen, handleAlertClose } = useAlert();

    const { myWatchList, setMyWatchList, setIsPublic, isLoading } = useMyWatchList();
    const isLoaded = useRef(false);
    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
            setMyWatchList(userId);
        }
    }, [isLoaded, userId, setMyWatchList]);

    const handleClickOpen = () => setModalOpen(true);

    const handleCopy = (listId, isPublic) => {
        if (!isPublic) {
            handleAlertOpen('warning', '먼저 공개로 설정해주세요.');
            return;
        }
        const url = `${window.location.origin}/watchlist/${listId}`;
        navigator.clipboard.writeText(url).then(() => {
            handleAlertOpen('success', '링크를 복사했어요. 원하는 곳에 공유하세요!');
        }).catch(err => {
            console.error('복사 실패 ', err);
            handleAlertOpen('error', '복사하지 못했습니다. 잠시후 다시 시도해주세요.');
        });
    };

    const handleTogglePublic = async (storageId, isPublic, movieCount) => {
        if (movieCount === 0) {
            handleAlertOpen('warning', '편집을 눌러서 영화를 추가해주세요!');
            return;
        }
        const status = await setIsPublic(storageId, userId);
        if (status === 200) {
            if (isPublic) {
                handleAlertOpen('success', '비공개로 변경되었습니다.');
                setMyWatchList(userId);
            } else {
                handleAlertOpen('success', '공개로 변경되었습니다.');
                setMyWatchList(userId);
            }
            setMyWatchList(userId);
        } else {
            handleAlertOpen('error', '변경 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const handleDelete = async (storageId) => {
        console.log(storageId);
        if (window.confirm('WatchList를 삭제하시겠습니까?')) {
            try {
                const response = await deleteMyWatchList(storageId, userId);
                if (response.status === 200) {
                    handleAlertOpen('success', '삭제되었습니다.');
                    setMyWatchList(userId);
                } else {
                    handleAlertOpen('error', '삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
                }
            } catch (error) {
                console.error(error);
                handleAlertOpen('error', '삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        }
    };

    return (
        <OpacityDiv>
            <AlertMessage
                type={''}
                message={''}
                handleClose={() => handleAlertClose()}
            />
            <TitleDiv>
                <div>
                    <FontAwesomeIcon icon={faFolder} />
                    <span className="bold"> 작성한 WatchList</span>
                </div>
                <div onClick={handleClickOpen}>
                    <FontAwesomeIcon icon={faPlus} className="orangeIcon bold" />
                    <span className="regular point"> New Folder</span>
                </div>
            </TitleDiv>
            <WatchListContainer>
                {isLoading ? (
                    <Loading message="로딩 중입니다." />
                ) : myWatchList?.length > 0 ? (
                    myWatchList.map((list) => (
                        <WatchListItemDiv key={list.id}>
                            <WatchListItem>
                                <ImageGrid>
                                    {list.movies.slice(0, 4).map((movie) => (
                                        <PosterImage key={movie.id} src={movie.poster} alt={movie.title} loading="lazy" />
                                    ))}
                                    {Array.from({ length: 4 - list.movies.length }).map((_, index) => (
                                        <Placeholder key={`placeholder-${index}`} />
                                    ))}
                                </ImageGrid>
                                <div className="itemList">
                                    <button className="regular">{list.movieCount}편</button>
                                    {list.movies.length > 0 ? (
                                        <Link to={`/watchlist/${list.id}`} className="storageName point">{list.storageName}</Link>
                                    ) : (
                                        <h4 className="storageName regular">{list.storageName}</h4>
                                    )}
                                    <ToggleDiv>
                                        <span>공개여부</span>
                                        <input
                                            role="switch"
                                            type="checkbox"
                                            checked={list.isPublic}
                                            onChange={() => handleTogglePublic(list.id, list.isPublic, list.movieCount)}
                                        />
                                        <Link to={`/watchlist/${list.id}/edit`} className="linkPoint point">편집</Link>
                                        <span className={`point ${list.movieCount === 0 ? 'disabled' : ''}`} onClick={() => handleCopy(list.id, list.isPublic)}>공유</span>
                                        <span className="point" onClick={() => handleDelete(list.id)}>삭제</span>
                                    </ToggleDiv>
                                </div>
                            </WatchListItem>
                        </WatchListItemDiv>
                    ))
                ) : (
                    <EmptyResult
                        img="/assets/popcorn_score_null.svg"
                        message="New Folder를 눌러서 WatchList를 추가해주세요!"
                        size="4"
                        fontSize="1.1"
                    />
                )}
            </WatchListContainer >
            <NewFolderModal open={modalOpen} setOpen={setModalOpen} />
        </OpacityDiv>
    );
};

export default MyWatchList;