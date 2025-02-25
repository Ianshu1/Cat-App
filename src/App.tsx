import { useState } from 'react';
import CardList from './components/molecules/CardList';
import Table from './components/molecules/Table';
import useCats from './hooks/useCats';
import useViewMode from './hooks/useViewMode';
import FetchButton from './components/atoms/ShowMoreCatsButton';
import ViewToggleButtons from './components/atoms/ViewToggleButtons';
import Search from './components/molecules/Search';
import useDebounce from './hooks/useDebounce';

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

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <FetchButton onClick={getCats} disabled={isLoading} />
        </div>

        {cats.length > 0 && (
          <div className="flex items-center gap-4">
            <Search
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by breed, temperament or origin..."
            />
            <ViewToggleButtons
              viewMode={viewMode}
              onViewChange={setViewMode}
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
            <CardList cats={filteredCats} />
          ) : (
            <Table cats={filteredCats} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
