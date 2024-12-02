import { Box, Grid2 } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
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

    const filterMonth = useMemo(() => {
        return month.reduce((acc, item) => {
            const { storage, movies } = item;
            const { id: storage_id, storageName: storage_name, storageImage: storage_image } = storage;

            if (!acc[storage_id]) {
                acc[storage_id] = {
                    storage_id,
                    storage_name,
                    storage_image,
                    movies: [],
                };
            }

            movies.forEach(movie => {
                const { posterPath, title } = movie;
                acc[storage_id].movies.push({ posterPath, title });
            });

            return acc;
        }, {});
    }, [month]);

    return (
        <WatchMonthContainer>
            <h4 className="extra-bold title">이 달의 인기 WatchList를 알려드려요!</h4>
            <Grid2 container spacing={3} sx={{ justifyContent: "center", width: "100%" }}>
                {Object.values(filterMonth).map((data, index) => {
                    const { boxcolor, deepcolor } = Colors[index] || Colors[0];
                    return (
                        <Grid2
                            key={data.storage_id}
                            xs={12} sm={6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "17rem",
                                    maxWidth: "17rem",
                                    minHeight: "15rem",
                                    backgroundColor: boxcolor,
                                    borderRadius: "0.313rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    transition: "all 0.3s ease",
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
                                                <img className="box__image" src={movie.posterPath} alt={movie.title} loading="lazy" />
                                                <span className="regular box__span">{movie.title}</span>
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