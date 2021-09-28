import PropTypes from 'prop-types';
import cx from 'classnames';

export const PokemonDetails = ({ id, name, kanjiName, image, types, description, growthRateName, species, height, weight, genderRate, baseHappiness, captureRate, abilities, baseExperience, stats, evolutions, ...htmlButtonElementProps }) => {
    htmlButtonElementProps.className = cx(
        htmlButtonElementProps?.className,
        'bg-gray-100 rounded-md flex flex-row shadow relative'
    );
    return (
        <div {...htmlButtonElementProps}>
            <div className={""}>
                <div className={"h-full bg-gray-200 py-7 px-20 rounded-t-md flex items-center"}>
                    <img src={image} alt={name} style={{maxWidth: "200px"}}/>
                    <span className={"absolute text-gray-300 text-4xl font-medium left-1 top-1 italic"}>#00{id}</span>
                </div>
            </div>
            <div className={"w-full mx-6 py-4"}>
                <h1 className={"text-left capitalize font-medium text-3xl mb-2"}>{name}<span className={"ml-3 text-xl text-gray-300"}>• {kanjiName}</span></h1>
                <ul className={"flex flex-row justify-start space-x-1"}>
                    {types.map(function(type){
                        return (<li className={"bg-green-500 rounded-full px-3 py-0.5 text-white text-sm italic justify-center align-middle"}>{type.name}</li>)
                    })}
                </ul>
                <p className={'italic mt-1'}>{description}</p>
                <hr/>
                <table className="w-full mt-4 mb-2">
                    <tbody>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Species</td>
                            <td className={"w-1/3"}>{species}</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Height</td>
                            <td className={"w-1/3"}>{height}</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Weight</td>
                            <td className={"w-1/3"}>{weight}</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Abilities</td>
                            <td className={"w-1/3  space-x-1"}>
                                {abilities.map(function(abilitie){
                                    return (<span className={"bg-yellow-500 rounded-lg px-3 py-0.5 text-white text-sm italic"}>{abilitie.isHidden === true ? abilitie.name+' (Hidden)' : abilitie.name}</span>)
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <p className={"mt-2"}>Training</p>
                <table className={"w-full mt-4"}>
                    <tbody>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Base Exp</td>
                            <td className={"w-1/3"}>{baseExperience}</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Base Happiness</td>
                            <td className={"w-1/3"}>{baseHappiness}</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Catch Rate</td>
                            <td className={"w-1/3"}>{captureRate}%</td>
                        </tr>
                        <tr>
                            <td className={"w-1/4 font-light text-gray-400"}>Growth Rate</td>
                            <td className={"w-1/3"}>{growthRateName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

PokemonDetails.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    kanjiName: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    growthRateName: PropTypes.string,
    species: PropTypes.string.isRequired,
    height: PropTypes.number,
    weight: PropTypes.number,
    genderRate: PropTypes.oneOf(['1', '2']),
    baseHappiness: PropTypes.number,
    captureRate: PropTypes.number,
    abilities: PropTypes.array,
    baseExperience: PropTypes.number.isRequired,
    stats: PropTypes.array,
    evolutions: PropTypes.array.isRequired
};
