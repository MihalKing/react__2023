import React from 'react';
import {UserDetails} from "../userDetails/UserDetails";

const User = ({ user, setUserDetails}) => {
const {id,name} = user;
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div><button onClick={() => setUserDetails(<UserDetails/>)}>details</button></div>
        </div>
    );
};

export {User};