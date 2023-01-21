import React from 'react';

const Simpson = (props) => {
    const {image, id, name, status, gender, species} = props;
    return (
        <div>
            <h2>{id}</h2>
            <h3>{name}</h3>
            <h4>{status}</h4>
            <h4>{gender}</h4>
            <h3>{species}</h3>
            <img src={image} alt={''}/>
        </div>
    );
};

export {Simpson};