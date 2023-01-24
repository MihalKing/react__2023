import React from 'react';

const Launch = ({ship}) => {
    const {mission_name} = ship;
    return (
        <div>
            <div>mission_name:{mission_name}</div>
        </div>
    );
};

export {Launch};