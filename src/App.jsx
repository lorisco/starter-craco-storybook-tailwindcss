import {useState} from "react";
import {useFetchList} from "./useFetchList";
import {Pokemon} from "./components/pokemon";
import {pad} from "./pad";

export const App = () => {
    const [offset, setOffset] = useState(0);
    const result = useFetchList(offset);

    return (
        <div className="flex items-center justify-center">
            <div>
                <ul className="flex flex-col">
                {result.map((poke, index) => (
                    <Pokemon key={index} types={['test']} id={pad(index+1, 3)} name={poke.name} image={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/'+pad(index+1, 3)+'.png'}/>
                ))}
                </ul>
                <button className="border-2 m-4" onClick={(handleChange) => setOffset(offset + 10)}>
                    Voir plus
                </button>
            </div>
        </div>
    );
}
