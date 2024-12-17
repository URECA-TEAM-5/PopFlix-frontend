import ShortReview from "../../components/movieDetail/ShortReview";
import MovieIntro from "../../components/movieDetail/MovieIntro";
import PoppleTip from "../../components/movieDetail/PoppleTip";
import MovieReviewTabs from "../../components/movieDetail/movieReviewTabs/MovieReviewTabs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const MovieDetailPage = () =>{
    const { id } = useParams();
const user = JSON.parse(localStorage.getItem('user'));
const { userId } = user; // userId를 올바르게 추출
useEffect(() =>{
    console.log('로그인 유저 정보 :',user);
    console.log('로그인 유저 제발 :',user.userId);
    console.log('유저 정보:',userId)
},[])
  
    return (
        <div>
            <MovieIntro movieId={id} />
            <PoppleTip movieId={id} userId={userId}/>
            {/* <ShortReview movieId={id}/> 
             <MovieReviewTabs movieId={id}/> */}
        </div>
    )
}
export default MovieDetailPage;