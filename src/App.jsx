import {useState} from "react";
import {useFetchList} from "./useFetchList";

export const App = () => {
    const [offset, setOffset] = useState(0);
    const {result} = useFetchList({offset});

    console.log(result)

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <ul>
                {result.list.map(poke => (
                    <li key={poke.url}>{poke.name}</li>
                ))}
                </ul>
                <button className="border-2" onClick={(handleChange) => setOffset(offset + 10)}>
                    Voir plus
                </button>
            </div>
        </div>
    );
}
