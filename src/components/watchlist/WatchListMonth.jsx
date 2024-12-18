import { Box, Grid2 } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ErrorDiv, WatchMonthContainer } from './style/WatchListMonth';
import { colors } from '../../global/globalStyle';
import { getWatchlistMonthlyTop } from '../../api/watchlist/watchlist';
import { Link } from 'react-router-dom';

const WatchListMonth = () => {
    const Colors = [
        { boxcolor: colors.orange, deepcolor: "#d58400" },
        { boxcolor: "#f44280", deepcolor: "#d1336A" },
        { boxcolor: "#a442f4", deepcolor: "#8937cb" },
    ];
    const [monthlyTopData, setMonthlyTopData] = useState(null);
    const [error, setError] = useState(false);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const isLoaded = useRef(false);

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
            const fetchWatchlistMonthlyTop = async () => {
                const data = await getWatchlistMonthlyTop(year, month);
                if (data.response) {
                    const sortedData = data.response
                        .sort((a, b) => b.movieCount - a.movieCount)
                        .slice(0, 3);
                    setMonthlyTopData(sortedData);
                    setError(false);
                } else {
                    setMonthlyTopData([]);
                    setError(true);
                }
            };
            fetchWatchlistMonthlyTop();
        }
    }, [isLoaded, year, month]);

    return (
        <WatchMonthContainer>
            <h3 className="extra-bold title">🌟 이 달의 인기 WatchList를 알려드려요!</h3>
            {error ? (
                <ErrorDiv>
                    <img src="/assets/api_error.svg" alt="api 에러 아이콘" />
                    <p className="regular">지금은 데이터를 불러올 수 없어요</p>
                </ErrorDiv>
            ) : (
                <Grid2 container spacing={3} sx={{ justifyContent: "center", width: "100%" }}>
                    {monthlyTopData && monthlyTopData.map((data, index) => {
                        const { boxcolor, deepcolor } = Colors[index] || Colors[0];
                        return (
                            <Grid2
                                key={data.id}
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
                                    <p className="boxP">
                                        <Link to={`/watchlist/${data.id}`} className="linkStorage">
                                            {data.storageName}
                                        </Link>
                                    </p>
                                    <div>
                                        <ul className="boxUl">
                                            {data.movies.slice(0, 3).map((movie, index) => (
                                                <li key={index} className="boxLi">
                                                    <img className="boxImage" src={movie.poster} alt={movie.movieTitle} loading="lazy" />
                                                    <span className="regular boxSpan">
                                                        <Link to={`/movieDetail/${movie.id}`} className="linkMovie">{movie.movieTitle}</Link>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Box>
                            </Grid2>
                        );
                    })}
                </Grid2>
            )}
        </WatchMonthContainer>
    )
}

export default WatchListMonth;