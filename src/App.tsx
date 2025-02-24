import { useState } from 'react'
import CardList from './components/molecules/CardList';
import Table from './components/molecules/Table';
import axios from 'axios';
import { CatImage } from './types';

function App() {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const getCats = async () => {
    const response = await axios.get<CatImage[]>("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1");
    setCats(response.data);
  };

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-8">
        <button
          onClick={getCats}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Show Cats 🐾
        </button>

        {cats.length > 0 && (
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('card')}
              className={`py-2 px-4 rounded-lg transition-colors ${viewMode === 'card'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
              Card View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`py-2 px-4 rounded-lg transition-colors ${viewMode === 'table'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
              Table View
            </button>
          </div>
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
