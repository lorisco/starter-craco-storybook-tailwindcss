import PropTypes from 'prop-types';
import cx from 'classnames';

export const Pokemon = ({id, name, image, types, ...htmlCardElementProps }) => {
    htmlCardElementProps.className = cx(
        htmlCardElementProps?.className,
        'bg-gray-100 rounded-lg p-3',
    );
    return (
        <div {...htmlCardElementProps}>
            <p>#{id}</p>
            <h1>{name}</h1>
            <ul>
            {types.map(function(type, idx){
                return (<li key={idx}>{type.name}</li>)
            })}
            </ul>
            <img src={image} alt={name} style={{maxWidth: "40px"}}/>
        </div>
    );
}

Pokemon.propTypes = {
    loading: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    types: PropTypes.array.isRequired,
};
