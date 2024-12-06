import { moviesData } from '../main/data.js';
import { MovieIntroContainer, Header, MovieDetailContainer, GenreContainer, MovieImage, MovieOverview, GenreButton } from './style/MovieIntro';
import ReviewHeader from '../review/photo/ReviewHeader.jsx';
const MovieIntro = ({ movieId }) => {
  const movie = moviesData[movieId - 1]; // movieId에 해당하는 영화 데이터 가져오기
  return (
    <MovieIntroContainer>
      <ReviewHeader title={movie.title} subTitle={movie.releaseDate} />
      <GenreContainer>
        <GenreButton>액션</GenreButton>
      </GenreContainer>
      <MovieDetailContainer>
        <MovieImage src={movie.imageUrl} alt={movie.title} />
        <MovieOverview>
          <p>
            {/* {movie.overview} */}
            #루벤 플레셔 #톰하디 #미셸 윌리엄스 #리즈 아메드 
            <br />
            <br />
            영웅인가, 악당인가 진실을 위해서라면 몸을 사리지 않는 정의로운 열혈 기자 '에디 브록' 거대 기업 라이프 파운데이션의 뒤를 쫓던 그는 이들의
            사무실에 잠입했다가 실험실에서 외계 생물체 '심비오트'의 기습 공격을 받게 된다.   '심비오트'와 공생하게 된 '에디 브록'은 마침내 한층 강력한
            '베놈'으로 거듭나고, 악한 존재만을 상대하려는 '에디 브록'의 의지와 달리 '베놈'은 난폭한 힘을 주체하지 못하는데…!   지배할 것인가, 지배당할
            것인가 10월, 마블 역사상 가장 강렬한 빌런 히어로의 등장을 확인하라!
          </p>
        </MovieOverview>
      </MovieDetailContainer>
    </MovieIntroContainer>
  );
};

export default MovieIntro;
