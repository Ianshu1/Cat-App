import { CatImage } from "../../../types";
import Card from "../Card";

type Props = {
    cats: CatImage[];
}

const CardList = ({ cats }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cats.map((cat) => (
                <Card key={cat.id} cat={cat} />
            ))}
        </div>
    );
};

export default CardList;