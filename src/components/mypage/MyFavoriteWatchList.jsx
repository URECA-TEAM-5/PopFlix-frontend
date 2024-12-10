import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faHeart as solidheart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CarouselButton, Contatiner, ItemInfo, Movie, MovieImage, MovieInfo, Movies, NullDiv, TitleDiv, WatchListItem, WatchListItemWrapper } from './style/MyFavoriteWatchList';
import { useEffect, useRef, useState } from 'react';
import { useFavoriteStore } from '../../stores/mypage/MyFavoriteWatchListStore';
import { data } from '../../components/mypage/data/myFavoriteStorage';

const MyFavoriteWatchList = () => {
    const { favoriteData, setFavoriteData } = useFavoriteStore();
    const isLoaded = useRef(false);

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
            setFavoriteData(data);
        }
    }, [setFavoriteData]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < favoriteData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <TitleDiv>
                <FontAwesomeIcon icon={faHeart} />
                <span className="bold"> 관심있는 WatchList</span>
            </TitleDiv>
            {favoriteData.length === 0 ? (
                <NullDiv>
                    <p className="regular">좋아요를 누른 Watchlist가 없습니다</p>
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
                        <WatchListItem key={favoriteData[currentIndex].id}>
                            <ItemInfo>
                                <Link to={`/watchlist/${favoriteData[currentIndex].id}`} className="none">
                                    {favoriteData[currentIndex].storageName}
                                </Link>
                                <div>
                                    <span className="gapSpan">{favoriteData[currentIndex].creatorNickname}</span>
                                    <span className="gapSpan">총 {favoriteData[currentIndex].movieCount}편</span>
                                    <FontAwesomeIcon className="gapSpan" icon={favoriteData[currentIndex].liked ? solidheart : faHeart} />
                                </div>
                            </ItemInfo>
                            <Movies>
                                {favoriteData[currentIndex].movies.slice(0, 4).map((movie) => (
                                    <Movie key={movie.id}>
                                        <MovieImage src={movie.poster} alt={movie.title} />
                                        <MovieInfo>
                                            <h4>{movie.title}</h4>
                                            <span>{movie.genres.map(genre => genre.split(' (')[0]).join(' / ')}</span>
                                        </MovieInfo>
                                    </Movie>
                                ))}
                            </Movies>
                        </WatchListItem>
                    </WatchListItemWrapper>
                    {currentIndex < favoriteData.length - 1 && (
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