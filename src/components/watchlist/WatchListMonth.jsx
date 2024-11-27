import { Box, Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import { BoxDiv, WatchMonthContainer } from './style/WatchListMonth';
import { colors } from '../../global/globalStyle';

const WatchListMonth = () => {
    const Colors = [
        { boxcolor: colors.orange, deepcolor: "#d58400" },
        { boxcolor: "#f44280", deepcolor: "#d1336A" },
        { boxcolor: "#a442f4", deepcolor: "#8937cb" },
    ];

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
            <img src="/assets/watchlist_banner.svg" alt="WatchList Banner" />
            <h4 className="extra-bold title">이 달의 인기 WatchList를 알려드려요!</h4>
            <BoxDiv>
                {Object.values(filterMonth).map((data, index) => {
                    const { boxcolor, deepcolor } = Colors[index] || Colors[0];
                    return (
                        <Box key={data.storage_id}
                            sx={{
                                backgroundColor: boxcolor,
                                '& div': { backgroundColor: deepcolor }
                            }}
                            className="box">
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
            </BoxDiv>
        </WatchMonthContainer>
    )
}

export default WatchListMonth;