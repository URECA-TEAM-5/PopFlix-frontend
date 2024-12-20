import { Grid2 } from '@mui/material';

const WatchListFilter = ({ selectedFilter, sortData, totalCount }) => {
    return (
        <>
            <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid2 xs={4} spacing={2} container direction="row" alignItems="center">
                    <button className="bold pointBtn">
                        <span className="bold">전체</span>
                    </button>
                    <span className="bold amount">총 {totalCount}건</span>
                </Grid2>
                <Grid2 xs={8} container spacing={2} direction="row" alignItems="center">
                    <span className={`regular filter ${selectedFilter === "popular" ? "selected" : ""}`} onClick={() => sortData("popular")}>인기순</span>
                    <span className={`regular filter ${selectedFilter === "newest" ? "selected" : ""}`} onClick={() => sortData("newest")}>최신순</span>
                </Grid2>
            </Grid2 >
        </>
    )
}

export default WatchListFilter;