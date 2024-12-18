import { useParams } from "react-router-dom";
import { useMyWatchList } from "../../stores/mypage/MyWatchListStore";
import { AddMovieDiv, MovieDiv, TiTleDiv } from "./style/EditMoviList";
import { addMovie, deleteMovie } from "../../api/watchlist/watchlist";
import Search from "../common/search/Search";
import { useState } from "react";
import { useSearch } from "../../stores/search/useSearch";
import AlertMessage from "../common/alert/AlertMessage";
import { useAlert } from "../../stores/alert/AlertStore";
import EmptyResult from "../common/emptyResult/EmptyResult";

const EditMovieList = () => {
    const { myWatchList, setMyWatchList } = useMyWatchList();
    const { id } = useParams();
    // const userId = 1;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;
    const watchListItem = myWatchList.find((list) => String(list.id) === String(id));
    const [keyword, setKeyword] = useState('');

    const { searchByKeyword, searchResponse, setSearchResponse } = useSearch();
    const { handleAlertOpen, handleAlertClose } = useAlert();

    const handleDeleteMovie = async (movieId) => {
        if (window.confirm('보관함에서 해당 영화를 삭제하시겠습니까?')) {
            try {
                const response = await deleteMovie(id, userId, movieId);
                if (response.status === 200) {
                    setMyWatchList(userId);
                    handleAlertOpen('success', '삭제되었습니다.');
                } else {
                    handleAlertOpen('error', '삭제 실패했습니다. 다시 시도해주세요.');
                }
            } catch (error) {
                console.error(error);
                handleAlertOpen('error', '삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
        }
    };

    const handleAddMovie = async (movieId) => {
        if (window.confirm('보관함에 해당 영화를 추가하시겠습니까?')) {
            const data = {
                movieId: movieId
            };
            const response = await addMovie(id, userId, data);
            if (response) {
                setMyWatchList(userId);
                handleAlertOpen('success', '추가되었습니다.');
                setSearchResponse('');
            } else {
                handleAlertOpen('error', '추가하지 못했습니다. 다시 시도해주세요.');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
        searchByKeyword(keyword);
    };

    return (
        <>
            <AlertMessage
                type={''}
                message={''}
                handleClose={() => handleAlertClose()}
            />
            <TiTleDiv>
                <span className="extra-bold">✏️ 영화를 수정해주세요!</span>
            </TiTleDiv>
            {watchListItem.movies.length > 0 ? (
                <MovieDiv>
                    {watchListItem.movies.map((movie) => (
                        <div key={movie.id}>
                            <img className="movieImg" src={movie.poster} alt={movie.movieTitle} loading="lazy" />
                            <div className="centerDiv">
                                <span>{movie.movieTitle}</span>
                                <button onClick={() => handleDeleteMovie(movie.id)}> X</button>
                            </div>
                        </div>
                    ))}
                </MovieDiv >
            ) : (
                <EmptyResult
                    message="보관함에 영화가 없습니다. 추가해주세요!"
                    size="5"
                    fontSize="1.1"
                />
            )}
            <AddMovieDiv>
                <div className="searchDiv">
                    <Search
                        val={keyword}
                        setVal={setKeyword}
                        handleClick={handleSubmit}
                        fontSize={1}
                    />
                </div>
                <div className="addMovieList">
                    {searchResponse !== '' && (
                        <>
                            {searchResponse.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img className="addMovieImg" src={item.poster_path} alt="이미지" loading="lazy" />
                                        <div className="centerDiv">
                                            <span className="regular">{item.title}</span>
                                            <button onClick={() => handleAddMovie(item.id)}>+</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
            </AddMovieDiv>
        </>
    );
};

export default EditMovieList;