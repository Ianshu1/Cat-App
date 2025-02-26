import { useState } from 'react';
import CardList from './components/molecules/CardList';
import Table from './components/molecules/Table';
import useCats from './hooks/useCats';
import useViewMode from './hooks/useViewMode';
import FetchButton from './components/atoms/ShowMoreCatsButton';
import ViewToggleButtons from './components/atoms/ViewToggleButtons';
import Search from './components/molecules/Search';
import Pagination from './components/molecules/Pagination';
import useDebounce from './hooks/useDebounce';
import usePagination from './hooks/usePagination';

function App() {
  const { cats, isLoading, error, getCats } = useCats();
  const { viewMode, setViewMode } = useViewMode();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredCats = cats.filter(cat => {
    const breed = cat.breeds?.[0];
    const query = debouncedSearchQuery.toLowerCase();

    return (
      breed?.name?.toLowerCase().includes(query) ||
      breed?.temperament?.toLowerCase().includes(query) ||
      breed?.origin?.toLowerCase().includes(query)
    );
  });

  const {
    currentPage,
    totalPages,
    getItemsForPage,
    handlePageChange
  } = usePagination({
    totalItems: filteredCats.length,
    itemsPerPage: 20
  });

  const paginatedCats = getItemsForPage(filteredCats);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <FetchButton onClick={getCats} disabled={isLoading} />
          {cats.length > 0 && (
            <ViewToggleButtons
              viewMode={viewMode}
              onViewChange={setViewMode}
            />
          )}
        </div>

        {cats.length > 0 && (
          <div className="ml-auto">
            <Search
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by breed, temperament or origin..."
            />
          </div>
        )}
      </div>

      {error && (
        <div className="text-red-500 mb-4">
          Error: {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center">Loading cats...</div>
      ) : (
        <>
          {filteredCats.length === 0 && searchQuery && (
            <div className="text-center text-gray-500 mb-4">
              No cats found matching "{searchQuery}"
            </div>
          )}

          {viewMode === 'card' ? (
            <CardList cats={paginatedCats} />
          ) : (
            <Table cats={paginatedCats} />
          )}

          {filteredCats.length > 20 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
