import { Grid2 } from '@mui/material';
import { CardContentDiv, CardTextDiv, WatchAllContainer, WatchListCard } from './style/WatchListAll';
import WatchListFilter from './WatchListFilter';
import WatchListLike from './WatchListLike';
import WatchListPagination from './WatchListPagenation';
import { useState } from 'react';
import { allData } from './data/allData';

const WatchListAll = () => {
    const [sortedData, setSortedData] = useState(allData);
    const [selectedFilter, setSelectedFilter] = useState("popular");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const sortData = (filter) => {
        let sorted;
        if (filter === "popular") {
            sorted = [...allData].sort((a, b) => b.like - a.like);
        } else if (filter === "latest") {
            sorted = [...allData].sort((a, b) => {
                const dateA = new Date(a.create_at);
                const dateB = new Date(b.create_at);
                return dateB - dateA;
            });
        }
        setSortedData(sorted);
        setSelectedFilter(filter);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <WatchAllContainer>
            <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
                <WatchListFilter selectedFilter={selectedFilter} sortData={sortData} />
            </Grid2>
            <Grid2 className="listContainer" container spacing={3}>
                {currentItems.map((data) => (
                    <Grid2 key={data.storage_id}>
                        <WatchListCard>
                            <div>
                                <img src={data.movie_image} alt={data.storage_name} />
                            </div>
                            <CardContentDiv>
                                <CardTextDiv className="regular">
                                    <span>{data.storage_name}</span>
                                    <span className="small">{data.user_nickname} | {data.movies}편</span>
                                    <div className='likeDiv'>
                                        <WatchListLike />
                                        <span className="small">{data.like}</span>
                                    </div>
                                </CardTextDiv>
                            </CardContentDiv>
                        </WatchListCard>
                    </Grid2>
                ))}
            </Grid2>
            <WatchListPagination
                currentPage={currentPage}
                totalItems={sortedData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </WatchAllContainer >
    )
}

export default WatchListAll;