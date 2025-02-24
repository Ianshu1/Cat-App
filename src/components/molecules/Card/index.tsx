import { CatImage } from "../../../types";

type Props = {
    cat: CatImage;
}

const Card = ({ cat }: Props) => {
    const breed = cat.breeds?.[0];

    return (
        <div className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-[300px] h-[300px] relative overflow-hidden">
                <img
                    src={cat.url}
                    alt={breed?.name || "Cat"}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                    {breed?.name || ""}
                </h2>

                {breed?.temperament && (
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        Temperament: {breed.temperament}
                    </p>
                )}

                {breed?.origin && (
                    <div className="text-sm text-gray-500">
                        <span>{breed.origin}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;