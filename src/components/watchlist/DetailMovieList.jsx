import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovieDetails, MovieItem, MovieList, MovieListTitle } from "./style/DetailMovieList";
import { faList } from "@fortawesome/free-solid-svg-icons";

const DetailMovieList = ({ movies }) => {
    return (
        <>
            <MovieListTitle>
                <div>
                    <FontAwesomeIcon icon={faList} />
                    <span className="bold"> List</span>
                </div>
            </MovieListTitle>
            <MovieList>
                {movies && movies.map((movie) => (
                    <li key={movie.id}>
                        <MovieItem>
                            <img src={movie.posterPath} alt={movie.title} loading="lazy" />
                            <MovieDetails>
                                <span className="title pointSpan">{movie.title}</span>
                                <span>{movie.genres.map(genre => genre.split(' (')[0]).join(' / ')}</span>
                                <span className="pointSpan">{movie.director}</span>
                                <span>{movie.releaseDate}</span>
                            </MovieDetails>
                        </MovieItem>
                    </li>
                ))}
                <div className="contentLine"></div>
            </MovieList>
        </>
    );
};

export default DetailMovieList;