import ShortReview from '../../components/movieDetail/ShortReview';
import MovieIntro from '../../components/movieDetail/MovieIntro';
import PoppleTip from '../../components/movieDetail/PoppleTip';
import MovieReviewTabs from '../../components/movieDetail/movieReviewTabs/MovieReviewTabs';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useMovieDetail } from '../../stores/movieDetail/MovieDetailStore';

const MovieDetailPage = () => {
  const { movieData, setMovieData,ratingData, setRatingData ,setPhotoReviewData} = useMovieDetail();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const { userId } = user; // userId를 올바르게 추출
  const isLoaded = useRef(false);

  useEffect(() => {
    // useEffect가 무한으로 발생하는 이슈를 isLoaded로 막아준다
    if (!isLoaded.current) {
      isLoaded.current = true;

      // 회원정보 확인
      console.log('로그인 유저 정보 :', user);
      console.log('로그인 유저 제발 :', user.userId);
      console.log('유저 정보:', userId);

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
          <MovieReviewTabs movieId={id}/>
        </div>
      ) : (
        <h1>로딩중 ~</h1>
      )}
    </>
  );
};
export default MovieDetailPage;
