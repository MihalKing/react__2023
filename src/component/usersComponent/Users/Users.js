import React, {useEffect, useState} from 'react';
import {usersService} from "../services";
import {User} from "../User/User";

const Users = () => {
    const {users,setUsers} = useState([])

    useEffect(()=>{
        usersService.getAll().then(({data}) =>  setUsers([...data]))
    },[])

    return (
        <div>

        </div>
    );
};

export {Users};