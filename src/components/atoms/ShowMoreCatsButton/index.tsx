type FetchButtonProps = {
    onClick: () => void;
}

export const FetchButton = ({ onClick }: FetchButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
            Show Cats 🐾
        </button>
    );
};