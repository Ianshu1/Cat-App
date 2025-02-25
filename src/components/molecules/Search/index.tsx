import Input from '../../atoms/Input';

type SearchProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

const Search = ({ value, onChange, placeholder = 'Search...' }: SearchProps) => {
    return (
        <div className="relative w-full max-w-[300px] min-w-[200px]">
            <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
            </div>
        </div>
    );
};

export default Search