import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './data/detailData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faList } from '@fortawesome/free-solid-svg-icons';
import { MovieList } from './style/WatchListDetail';

const WatchListDetail = () => {
    const dataRef = useRef(data);
    const { id } = useParams();
    const [filterData, setFilterData] = useState({});
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const filteredData = dataRef.current.filter(item => item.storage.id === parseInt(id));

        if (filteredData.length > 0) {
            const storage = filteredData[0].storage;
            const movies = filteredData[0].movies;

            const detailData = {
                id: storage.id,
                storageName: storage.storageName,
                storageImage: storage.storageImage,
                movies: movies.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.posterPath,
                }))
            };

            setFilterData(detailData);
        }
    }, [id]);

    return (
        <div>
            <FontAwesomeIcon icon={faAngleLeft} onClick={onClickBack} />
            {filterData.movies && (
                <img src={filterData.movies[0].posterPath} alt={filterData.movies[0].title} />
            )}
            <h3>{filterData.storageName}</h3>
            <div>
                <FontAwesomeIcon icon={faList} />
                <span className="bold">List</span>
            </div>
            <MovieList>
                {filterData.movies && filterData.movies.map((movie) => (
                    <li key={movie.id}>
                        <img src={movie.posterPath} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </li>
                ))}
            </MovieList>
        </div>
    );
}

export default WatchListDetail;