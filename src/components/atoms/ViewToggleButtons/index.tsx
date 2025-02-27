type ViewToggleButtonsProps = {
    viewMode: 'card' | 'table';
    onViewChange: (mode: 'card' | 'table') => void;
}

const ViewToggleButtons = ({ viewMode, onViewChange }: ViewToggleButtonsProps) => {
    return (
        <div className="flex gap-2">
            <button
                onClick={() => onViewChange('card')}
                className={`py-2 px-4 rounded-lg transition-colors ${viewMode === 'card'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
            >
                Card View
            </button>
            <button
                onClick={() => onViewChange('table')}
                className={`py-2 px-4 rounded-lg transition-colors ${viewMode === 'table'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
            >
                Table View
            </button>
        </div>
    );
};

export default ViewToggleButtons