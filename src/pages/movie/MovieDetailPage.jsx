import ShortReview from '../../components/movieDetail/ShortReview';
import MovieIntro from '../../components/movieDetail/MovieIntro';
import PoppleTip from '../../components/movieDetail/PoppleTip';
import MovieReviewTabs from '../../components/movieDetail/movieReviewTabs/MovieReviewTabs';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useMovieDetail } from '../../stores/movieDetail/MovieDetailStore';
import Loading from '../../components/common/loading/Loading';
import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';

const MovieDetailPage = () => {
  const { movieData, setMovieData, ratingData, setRatingData, setPhotoReviewData } = useMovieDetail();
  const { id } = useParams();
  const userId = chkUserInfo().userId;
  const isLoaded = useRef(false);

  useEffect(() => {
    // useEffect가 무한으로 발생하는 이슈를 isLoaded로 막아준다
    if (!isLoaded.current) {
      isLoaded.current = true;

      // 영화 정보 불러오기 => zustand에 저장 ( await 처리 필수 )
      setMovieData(id);
      setRatingData(id);
      setPhotoReviewData(id);
    }
  }, []);

  return (
    <>
      {movieData ? (
        <div>
          {/* <h1>불러옴</h1> */}
          <MovieIntro />
          <PoppleTip movieId={id} userId={userId} />
          {/* <ShortReview movieId={id} /> */}
          <MovieReviewTabs movieId={id} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default MovieDetailPage;
