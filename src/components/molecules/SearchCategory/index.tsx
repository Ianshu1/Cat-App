import Input from "../../atoms/Input";

type SearchCategory = 'breed' | 'temperament' | 'origin';
type SearchWithCategoryProps = {
    value: string;
    category: SearchCategory;
    onChange: (value: string) => void;
    onCategoryChange: (category: SearchCategory) => void;
};

const SearchWithCategory = ({
    value,
    category,
    onChange,
    onCategoryChange
}: SearchWithCategoryProps) => {
    return (
        <div className="flex gap-2 w-full max-w-md">
            <select
                value={category}
                onChange={(e) => onCategoryChange(e.target.value as SearchCategory)}
                className="px-3 py-2 border border-gray-300 rounded-lg min-w-[120px]"
            >
                <option value="breed">Breed</option>
                <option value="temperament">Temperament</option>
                <option value="origin">Origin</option>
            </select>

            <div className="relative flex-1">
                <Input
                    value={value}
                    onChange={onChange}
                    placeholder={`Search by ${category}...`}
                    className="w-full pl-10"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">

                </div>
            </div>
        </div>
    );
};

export default SearchWithCategory