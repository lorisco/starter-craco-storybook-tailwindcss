import PropTypes from 'prop-types';
import cx from 'classnames';

export const PokemonDetails = ({ id, name, kanjiName, image, types, description, growthRateName, species, height, weight, genderRate, baseHappiness, captureRate, abilities, baseExperience, stats, evolutions, ...htmlButtonElementProps }) => {
    htmlButtonElementProps.className = cx(
        htmlButtonElementProps?.className,
        ''
    );
    return (
        <div {...htmlButtonElementProps}>
            #{id}
            <p>{name}</p>
            <p>{kanjiName}</p>
            <img src={image} style={{maxWidth: "40px"}} alt={name}/>
            <ul>
                {types.map(function(type, idx){
                    return (<li key={idx}>{type.name}</li>)
                })}
            </ul>
            <p>{description}</p>
            <p>...</p>
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
