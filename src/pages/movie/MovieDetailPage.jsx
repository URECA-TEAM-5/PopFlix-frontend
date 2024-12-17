import ShortReview from "../../components/movieDetail/ShortReview";
import MovieIntro from "../../components/movieDetail/MovieIntro";
import PoppleTip from "../../components/movieDetail/PoppleTip";
import MovieReviewTabs from "../../components/movieDetail/movieReviewTabs/MovieReviewTabs";
import { useParams } from "react-router-dom";
const MovieDetailPage = () =>{
    const { id } = useParams();
    return (
        <div>
            <MovieIntro movieId={id}/>
            <PoppleTip movieId={id}/>
            <ShortReview movieId={id}/> 
             <MovieReviewTabs movieId={id}/>
        </div>
    )
}
export default MovieDetailPage;