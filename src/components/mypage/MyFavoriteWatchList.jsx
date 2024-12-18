import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faHeart as solidheart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CarouselButton, Contatiner, ItemInfo, Movie, MovieImage, MovieInfo, Movies, NullDiv, TitleDiv, WatchListItem, WatchListItemWrapper } from './style/MyFavoriteWatchList';
import { useEffect, useRef, useState } from 'react';
import { useMyFavoriteWatchList } from '../../stores/mypage/MyFavoriteWatchListStore';
import EmptyResult from '../common/emptyResult/EmptyResult';

const MyFavoriteWatchList = () => {
    const { myFavoriteWatchList, setMyFavoriteWatchList, setStorageLike } = useMyFavoriteWatchList();
    const isLoaded = useRef(false);

    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
            setMyFavoriteWatchList(userId);
        }
    }, [userId, setMyFavoriteWatchList]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < myFavoriteWatchList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleLikeToggle = async (storageId) => {
        await setStorageLike(storageId, userId);
        setMyFavoriteWatchList(userId);
    };

    return (
        <>
            <TitleDiv>
                <FontAwesomeIcon icon={faHeart} />
                <span className="bold"> 관심있는 WatchList</span>
            </TitleDiv>
            {myFavoriteWatchList.length === 0 ? (
                <NullDiv>
                    <EmptyResult
                        img="/assets/review_null.svg"
                        message="좋아요를 누른 Watchlist가 없습니다"
                        size="4"
                        p="1"
                    />
                    <Link to="/watchlist">
                        <button className="regular">보러가기</button>
                    </Link>
                </NullDiv>
            ) : (
                <Contatiner>
                    {currentIndex > 0 && (
                        <CarouselButton className="prev" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </CarouselButton>
                    )}
                    <WatchListItemWrapper>
                        <WatchListItem key={myFavoriteWatchList[currentIndex].id}>
                            <ItemInfo>
                                <Link to={`/watchlist/${myFavoriteWatchList[currentIndex].id}`} className="none">
                                    {myFavoriteWatchList[currentIndex].storageName}
                                </Link>
                                <div>
                                    <span className="gapSpan">{myFavoriteWatchList[currentIndex].creatorNickname}</span>
                                    <span className="gapSpan">총 {myFavoriteWatchList[currentIndex].movieCount}편</span>
                                    <FontAwesomeIcon
                                        className={`gapSpan ${myFavoriteWatchList[currentIndex].liked ? 'liked' : ''}`}
                                        icon={myFavoriteWatchList[currentIndex].liked ? solidheart : faHeart}
                                        onClick={() => handleLikeToggle(myFavoriteWatchList[currentIndex].id)} />
                                </div>
                            </ItemInfo>
                            <Movies>
                                {myFavoriteWatchList[currentIndex].movies.slice(0, 4).map((movie) => (
                                    <Movie key={movie.id}>
                                        <MovieImage src={movie.poster} alt={movie.title} loading='lazy' />
                                        <MovieInfo>
                                            <h4>{movie.title}</h4>
                                            <span>{movie.genres.map(genre => genre.split(' (')[0]).join(' / ')}</span>
                                        </MovieInfo>
                                    </Movie>
                                ))}
                            </Movies>
                        </WatchListItem>
                    </WatchListItemWrapper>
                    {currentIndex < myFavoriteWatchList.length - 1 && (
                        <CarouselButton className="next" onClick={handleNext}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </CarouselButton>
                    )}
                </Contatiner>
            )}
        </>
    );
};

export default MyFavoriteWatchList;