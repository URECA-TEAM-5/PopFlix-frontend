import { Grid2 } from '@mui/material';
import { WatchAllContainer } from './style/WatchListAll';
import WatchListFilter from './WatchListFilter';
import WatchListPagination from './WatchListPagenation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { allData } from './data/allData';
import WatchListCardItem from './WatchListCardItem';

const WatchListAll = () => {
    const originalDataRef = useRef(allData);
    const [selectedFilter, setSelectedFilter] = useState();
    const [currentPage, setCurrentPage] = useState();
    const itemsPerPage = 8;

    const sortedData = useMemo(() => {
        if (!selectedFilter) return [];
        let sorted;
        if (selectedFilter === "popular") {
            sorted = [...originalDataRef.current].sort((a, b) => b.like - a.like);
        } else if (selectedFilter === "latest") {
            sorted = [...originalDataRef.current].sort((a, b) => {
                const dateA = new Date(a.create_at);
                const dateB = new Date(b.create_at);
                return dateB - dateA;
            });
        }
        return sorted;
    }, [selectedFilter]);

    const currentItems = useMemo(() => {
        if (!sortedData) return [];
        return sortedData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [sortedData, currentPage]);

    const updateFilter = (newFilter) => {
        setSelectedFilter(newFilter);
    };

    const updatePage = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        setSelectedFilter("popular");
        setCurrentPage(1);
    }, []);

    return (
        <WatchAllContainer>
            <Grid2 container spacing={2} alignItems="center" justifyContent="space-between">
                <WatchListFilter selectedFilter={selectedFilter} sortData={updateFilter} />
            </Grid2>
            <Grid2 className="listContainer" container spacing={3}>
                {currentItems.map((data) => (
                    <WatchListCardItem key={data.storage_id} data={data} />
                ))}
            </Grid2>
            <WatchListPagination
                currentPage={currentPage}
                totalItems={sortedData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={updatePage}
            />
        </WatchAllContainer>
    );
};

export default WatchListAll;