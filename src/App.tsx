import CardList from './components/molecules/CardList';
import Table from './components/molecules/Table';
import { ViewToggleButtons } from './components/atoms/ViewToggleButtons';
import { useCats } from './hooks/useCats';
import { useViewMode } from './hooks/useViewMode';
import { FetchButton } from './components/atoms/ShowMoreCatsButton';

function App() {
  const { cats, getCats } = useCats();
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-8">
        <FetchButton onClick={getCats} />
        {cats.length > 0 && (
          <ViewToggleButtons
            viewMode={viewMode}
            onViewChange={setViewMode}
          />
        )}
      </div>

      {viewMode === 'card' ? (
        <CardList cats={cats} />
      ) : (
        <Table cats={cats} />
      )}
    </div>
  );
}

export default App
