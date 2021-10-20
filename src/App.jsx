import {useState} from "react";
import {useFetchList} from "./useFetchList";
import {Pokemon} from "./components/pokemon";
import {pad} from "./pad";

export const App = () => {
    const [offset, setOffset] = useState(0);
    const result = useFetchList(offset);

    return (
        <div className="max-w-full justify-items-center">
            <ul className="p-4 flex flex-row flex-wrap justify-items-center gap-4 justify-center">
            {result.map((poke, index) => (
                <Pokemon key={index} types={poke.types} id={pad(index+1, 3)} name={poke.name} image={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/'+pad(index+1, 3)+'.png'}/>
            ))}
            </ul>
            <div className="flex justify-items-center justify-center p-6">
                <button className="border-2 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 active:bg-gray-300" onClick={(handleChange) => setOffset(offset + 10)}>
                    Voir plus
                </button>
            </div>
        </div>
    );
}
