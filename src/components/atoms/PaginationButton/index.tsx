type PaginationButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
};

const PaginationButton = ({ onClick, disabled, children }: PaginationButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition-colors
                ${disabled
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
        >
            {children}
        </button>
    );
};

export default PaginationButton;