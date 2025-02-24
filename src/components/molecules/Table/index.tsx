import { CatImage } from "../../../types";

type Props = {
    cats: CatImage[];
}

const Table = ({ cats }: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Image</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Breed</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Temperament</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Origin</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {cats.map((cat) => {
                        const breed = cat.breeds?.[0];
                        return (
                            <tr key={cat.id}>
                                <td className="px-6 py-4">
                                    <img
                                        src={cat.url}
                                        alt={breed?.name || "Cat"}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {breed?.name || ""}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {breed?.temperament || "-"}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {breed?.origin || "-"}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
