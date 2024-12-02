import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovieDetails, MovieItem, MovieList, MovieListTitle } from "./style/DetailMovieList";
import { faList } from "@fortawesome/free-solid-svg-icons";

const DetailMovieList = ({ movies }) => {
    return (
        <>
            <MovieListTitle>
                <FontAwesomeIcon icon={faList} />
                <span className="bold"> List</span>
            </MovieListTitle>
            <MovieList>
                {movies && movies.map((movie) => (
                    <li key={movie.id}>
                        <MovieItem>
                            <img src={movie.posterPath} alt={movie.title} loading="lazy" />
                            <MovieDetails>
                                <span className="title point__span">{movie.title}</span>
                                <span>{movie.genres.map(genre => genre.split(' (')[0]).join(' / ')}</span>
                                <span className="point__span">{movie.director}</span>
                                <span>{movie.releaseDate}</span>
                            </MovieDetails>
                        </MovieItem>
                    </li>
                ))}
                <div className="content__line"></div>
            </MovieList>
        </>
    );
};

export default DetailMovieList;