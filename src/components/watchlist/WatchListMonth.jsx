import { Box, Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import { data } from './data/monthData';
import { WatchMonthContainer } from './style/WatchListMonth';
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

    const filterMonth = month.reduce((acc, item) => {
        const { storage, movies } = item;
        const { id: storage_id, storageName: storage_name, storageImage: movie_image } = storage;

        if (!acc[storage_id]) {
            acc[storage_id] = {
                storage_id,
                storage_name,
                movie_image,
                movies: [],
            };
        }

        movies.forEach(movie => {
            const { posterPath: movie_image, title: movie_title } = movie;
            acc[storage_id].movies.push({ movie_image, movie_title });
        });

        return acc;
    }, {});

    return (
        <WatchMonthContainer>
            <img className="banner" src="/assets/watchlist_banner.svg" alt="WatchList Banner" />
            <h4 className="extra-bold title">이 달의 인기 WatchList를 알려드려요!</h4>
            <Grid2 container spacing={2} sx={{ justifyContent: "center", width: "85%" }}>
                {Object.values(filterMonth).map((data, index) => {
                    const { boxcolor, deepcolor } = Colors[index] || Colors[0];
                    return (
                        <Grid2
                            key={data.storage_id}
                            xs={12} sm={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "19rem",
                                    height: "18.5rem",
                                    backgroundColor: boxcolor,
                                    borderRadius: "0.313rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    div: {
                                        width: "100%",
                                        backgroundColor: deepcolor,
                                        borderRadius: '0.313rem',
                                    },
                                }}
                            >
                                <p className="box__p">{data.storage_name}</p>
                                <div>
                                    <ul className="box__ul">
                                        {data.movies.slice(0, 3).map((movie, index) => (
                                            <li key={index} className="box__li">
                                                <img className="box__image" src={movie.movie_image} alt={movie.movie_title} />
                                                <span className="regular box__span">{movie.movie_title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Box>
                        </Grid2>
                    );
                })}
            </Grid2>
        </WatchMonthContainer>
    )
}

export default WatchListMonth;