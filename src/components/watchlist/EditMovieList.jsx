import { useParams } from "react-router-dom";
import { useMyWatchList } from "../../stores/mypage/MyWatchListStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { MovieDiv, TiTleDiv } from "./style/EditMoviList";

const EditMovieList = () => {
    const { myWatchList } = useMyWatchList();
    const { id } = useParams();

    const watchListItem = myWatchList.find((list) => String(list.id) === String(id));

    return (
        <>
            <TiTleDiv>
                <div>
                    <FontAwesomeIcon icon={faList} />
                    <span className="bold"> List</span>
                </div>
                <div className="editBtnDiv">
                    <button className="bold">Edit</button>
                </div>
            </TiTleDiv>
            {watchListItem ? (
                <MovieDiv>
                    {watchListItem.movies.map((movie) => (
                        <div key={movie.id}>
                            <img className="movieImg" src={movie.poster} alt={movie.title} loading="lazy" />
                            <div className="centerDiv">
                                <span>{movie.title}</span>
                                <button onClick={() => handleDeleteMovie(movie.id)}> X</button>
                            </div>
                        </div>
                    ))}
                </MovieDiv >
            ) : (
                <p className="regular">아직 추가하신 영화가 없습니다.</p>
            )}
        </>
    );
};

export default EditMovieList;