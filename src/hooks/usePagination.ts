import { useState, useEffect } from "react";

type UsePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
};

const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getItemsForPage = <T>(items: T[]): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalItems, totalPages]);

  return {
    currentPage,
    totalPages,
    getItemsForPage,
    handlePageChange,
    setCurrentPage,
  };
};

export default usePagination;
