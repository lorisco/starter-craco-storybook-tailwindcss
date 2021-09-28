import PropTypes from 'prop-types';
import cx from 'classnames';

export const Pokemon = ({id, name, image, types, ...htmlCardElementProps }) => {
    htmlCardElementProps.className = cx(
        htmlCardElementProps?.className,
        'bg-gray-100 rounded-md flex flex-col pb-4 shadow hover:shadow-lg relative',
    );
    return (
        <div {...htmlCardElementProps} style={{width:'300px'}}>
            <div>
                <div className={"bg-gray-200 py-4 px-8 rounded-t-md flex justify-center"}>
                    <img src={image} alt={name} style={{maxWidth: "150px"}}/>
                    <span className={"absolute text-gray-300 text-4xl font-medium left-1 top-1 italic"}>#00{id}</span>
                </div>
                <h1 className={"text-center capitalize font-medium text-3xl mt-3 mb-4"}>{name}</h1>
            </div>
            <div>
                <ul className={"flex flex-row justify-evenly justify-center"}>
                    {types.map(function(type, idx){
                        return (<li className={"bg-green-500 rounded-full px-3 py-0.5 text-white text-sm italic justify-center align-middle"} key={idx}>{type.name}</li>)
                    })}
                </ul>
            </div>
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
