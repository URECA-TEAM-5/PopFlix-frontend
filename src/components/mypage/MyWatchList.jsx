import { faFolder, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ImageGrid, Placeholder, PosterImage, TitleDiv, ToggleDiv, WatchListContainer, WatchListItem, WatchListItemDiv } from './style/MyWatchList';
import NewFolderModal from '../watchlist/modal/NewFolderModal';
import { useMyWatchList } from '../../stores/mypage/MyWatchListStore';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyWatchList = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);

    const { myWatchList, setMyWatchList, setIsPublic } = useMyWatchList();

    const { data } = useQuery({
        queryKey: ['getMyWatchList'],
        queryFn: async () => setMyWatchList(),
        staleTime: 1000 * 60,
    });

    const handleIsPublic = async (id, currentPublicStatus) => {
        console.log('[ handleIsPublic ]');
        const updatedState = !currentPublicStatus;
        await setIsPublic(id, updatedState);
    };

    const handleCopy = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('링크를 복사했어요. 원하는 곳에 공유하세요!');
        }).catch(err => {
            console.error('복사 실패 ', err);
        });
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
                {data?.length > 0 ? (
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
                                        {list.movies.length > 0 && (
                                            <>
                                                <span>공개여부</span>
                                                <input
                                                    role="switch"
                                                    type="checkbox"
                                                    checked={list.isPublic}
                                                    onChange={() => handleIsPublic(list.id, list.isPublic)}
                                                />
                                            </>
                                        )}
                                        <Link to={`/watchlist/${list.id}/edit`} className="linkPoint">편집</Link>
                                        {list.movies.length > 0 && (
                                            <span className="point" onClick={handleCopy}>공유</span>
                                        )}
                                        <span className="point">삭제</span>
                                    </ToggleDiv>
                                </div>
                            </WatchListItem>
                        </WatchListItemDiv>
                    ))
                ) : (
                    <span>새로운 WatchList를 추가하세요!</span>
                )}
            </WatchListContainer >
            <NewFolderModal open={open} setOpen={setOpen} />
        </>
    );
};

export default MyWatchList;