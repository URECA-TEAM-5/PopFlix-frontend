import { Grid2 } from '@mui/material';
import { WatchAllContainer } from './style/WatchListAll';
import WatchListFilter from './WatchListFilter';
import WatchListPagination from './WatchListPagenation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { popular, newest } from './data/allData';
import WatchListCardItem from './WatchListCardItem';

const WatchListAll = () => {
    const dataRef = useRef({
        popular: popular,
        newest: newest,
    });
    const [selectedFilter, setSelectedFilter] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);
    const itemsPerPage = 8;


    useEffect(() => {
        if (selectedFilter === 'popular') {
            setFilteredData(dataRef.current.popular);
        } else if (selectedFilter === 'newest') {
            setFilteredData(dataRef.current.newest);
        }
    }, [selectedFilter]);

    const currentItems = useMemo(() => {
        if (!filteredData || filteredData.length === 0) return [];
        return filteredData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }, [filteredData, currentPage]);

    const updateFilter = (newFilter) => {
        setSelectedFilter(newFilter);
        setCurrentPage(1);
    };

    const updatePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <WatchAllContainer>
            <div className="listHeader">
                <WatchListFilter selectedFilter={selectedFilter} sortData={updateFilter} totalCount={filteredData.length} />
            </div>
            <Grid2 className="listContainer" container spacing={4}>
                {currentItems.map((data) => (
                    <WatchListCardItem key={data.id} data={data} />
                ))}
            </Grid2>
            <WatchListPagination
                currentPage={currentPage}
                totalItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={updatePage}
            />
        </WatchAllContainer>
    );
};

export default WatchListAll;