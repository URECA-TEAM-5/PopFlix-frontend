import { PageButton, PaginationContainer } from './style/WatchListAll';

const WatchListPagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <PaginationContainer>
            {[...Array(pageCount)].map((_, index) => {
                const page = index + 1;
                return (
                    <PageButton
                        key={page}
                        onClick={() => handlePageChange(page)}
                        $isSelected={currentPage === page}
                    >
                        {page}
                    </PageButton>
                );
            })}
        </PaginationContainer>
    );
};

export default WatchListPagination;