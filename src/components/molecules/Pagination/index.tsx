import PaginationButton from '../../atoms/PaginationButton';


type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            <PaginationButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </PaginationButton>

            <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
            </span>

            <PaginationButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </PaginationButton>
        </div>
    );
};

export default Pagination;