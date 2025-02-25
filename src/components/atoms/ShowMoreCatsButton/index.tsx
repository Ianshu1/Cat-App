type FetchButtonProps = {
    onClick: () => void;
    disabled?: boolean;
}

const FetchButton = ({ onClick, disabled }: FetchButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                font-medium py-2 px-4 rounded-lg transition-colors
                ${disabled
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }
            `}
        >
            {disabled ? 'Loading...' : 'Show Cats 🐾'}
        </button>
    );
};

export default FetchButton