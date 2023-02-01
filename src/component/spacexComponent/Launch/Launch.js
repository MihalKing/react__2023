import React from 'react';

const Launch = ({ship}) => {
    const {mission_name,launch_year,flight_number} = ship;
    return (
        <div>
            <div>
                <ul>
                    <li>flight_number:{flight_number}</li>
                    <li>mission_name:{mission_name}</li>
                    <li>launch_year:{launch_year}</li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};
export {Launch};

