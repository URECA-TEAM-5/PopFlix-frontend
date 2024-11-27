import ShortReview from "../../components/movieDetail/ShortReview";
import MovieIntro from "../../components/movieDetail/MovieIntro";
import PoppleTip from "../../components/movieDetail/PoppleTip";
import MovieReviewTabs from "../../components/movieDetail/MovieReviewTabs";
const MovieDetailPage = () =>{
    return (
        <div>
            <MovieIntro/>
            <PoppleTip/>
            <ShortReview/>
            <MovieReviewTabs/>
        </div>
    )
}
export default MovieDetailPage;