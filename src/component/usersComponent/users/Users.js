import React, {useEffect, useState} from 'react';

import {User} from "../user/User";
import {userService} from "../services/userService";
import {UserDetails} from "../userDetails/UserDetails";

const Users = () => {

    const [users,setUsers] = useState([]);

    const [userDetails,setUserDetails] = useState(null);




    useEffect(()=> {
        {
             userService.getAll().then(value =>  value.data).then(value => setUsers([...value]))
        }
    },[])

    return (
        <div>
            {userDetails && <UserDetails user={userDetails} /> }

            <hr/>

            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/> )}

        </div>
    );
};

export {Users};
