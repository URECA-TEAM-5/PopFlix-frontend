import { faFolder, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { ImageGrid, MyWatchListNullDiv, Placeholder, PosterImage, TitleDiv, ToggleDiv, WatchListContainer, WatchListItem, WatchListItemDiv } from './style/MyWatchList';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { Link } from 'react-router-dom';
import NewFolderModal from '../myWatchlistModal/NewFolderModal';
import LoadingSpinner from '../suspense/LoadingSpinner';
import { deleteMyWatchList } from '../../api/mypage/myWatchList';

const MyWatchList = () => {
    const [open, setOpen] = useState(false);
    const { myWatchList, setMyWatchList, setIsPublic, isLoading } = useMyWatchList();

    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    useEffect(() => {
        setMyWatchList(userId);
    }, [userId, setMyWatchList]);

    const handleClickOpen = () => setOpen(true);

    const handleCopy = (listId, isPublic) => {
        if (!isPublic) {
            alert('먼저 공개로 설정해주세요.');
            return;
        }
        const url = `${window.location.origin}/watchlist/${listId}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('링크를 복사했어요. 원하는 곳에 공유하세요!');
        }).catch(err => {
            console.error('복사 실패 ', err);
        });
    };

    const handleTogglePublic = async (storageId, isPublic, movieCount) => {
        if (movieCount === 0) {
            alert('편집을 눌러서 영화를 추가해주세요!');
            return;
        }
        const status = await setIsPublic(storageId, userId);
        if (status === 200) {
            if (isPublic) {
                alert('비공개로 변경되었습니다');
                setMyWatchList(userId);
            } else {
                alert('공개로 변경되었습니다');
                setMyWatchList(userId);
            }
        } else {
            alert('변경에 실패했습니다.');
        }
    };

    const handleDelete = async (storageId) => {
        console.log(storageId)
        if (window.confirm('WatchList를 삭제하시겠습니까?')) {
            try {
                const response = await deleteMyWatchList(storageId, userId);
                if (response.status === 200) {
                    alert('삭제되었습니다.');
                    setMyWatchList(userId);
                } else {
                    alert('삭제 실패했습니다. 다시 시도해주세요.');
                }
            } catch (error) {
                console.error(error);
                alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        }
    };

    return (
        <>
            <TitleDiv>
                <div>
                    <FontAwesomeIcon icon={faFolder} />
                    <span className="bold"> 작성한 WatchList</span>
                </div>
                <div onClick={handleClickOpen}>
                    <FontAwesomeIcon icon={faSquarePlus} />
                    <span className="regular point"> New Folder</span>
                </div>
            </TitleDiv>
            <WatchListContainer>
                {isLoading ? (
                    <LoadingSpinner />
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
                    <MyWatchListNullDiv>
                        <img src="/assets/popcorn_score_null.svg" alt="생성한 워치리스트 없음" />
                        <p className="regular">New Folder를 눌러서 WatchList를 추가해주세요!</p>
                    </MyWatchListNullDiv>
                )}
            </WatchListContainer >
            <NewFolderModal open={open} setOpen={setOpen} />
        </>
    );
};

export default MyWatchList;