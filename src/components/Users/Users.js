import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../User/User";
import axios from "axios";

const Users = () => {
    const [users,setUsers] = useState([]);

    // useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => setUsers([...data]))
    // }, []);

    useEffect(()=> {
        usersService.getAll().then(({data}) => setUsers([...data]))
    },[])

    return (
        <div>

            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};