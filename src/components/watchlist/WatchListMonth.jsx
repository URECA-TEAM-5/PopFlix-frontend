import { Box, Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import { WatchMonthContainer } from './style/WatchListMonth';

const WatchListMonth = () => {
    const [month, setMonth] = useState([]);

    useEffect(() => {
        setMonth(data);
    }, []);

    const filterMonth = month.reduce((acc, movie) => {
        const { storage_id, storage_name, movie_image, movie_title } = movie;
        if (!acc[storage_id]) {
            acc[storage_id] = {
                storage_id,
                storage_name,
                movies: [],
            };
        }
        acc[storage_id].movies.push({ movie_image, movie_title });
        return acc;
    }, {});

    return (
        <WatchMonthContainer>
            <h4 className="extra-bold title">이 달의 인기 WatchList를 알려드려요!</h4>
            <Grid2 container spacing={2}>
                {Object.values(filterMonth).map((data, index) => {
                    const boxClass = `box${index + 1}`;
                    return (
                        <Box key={data.storage_id} className={boxClass}>
                            <p>{data.storage_name}</p>
                            <div>
                                <ul>
                                    {data.movies.slice(0, 3).map((movie, index) => (
                                        <li key={index}>
                                            <img className="box__image" src={movie.movie_image} alt={movie.movie_title} />
                                            <span className="regular">{movie.movie_title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Box>
                    );
                })}
            </Grid2>
        </WatchMonthContainer>
    )
}

export default WatchListMonth;