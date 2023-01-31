import React, {useEffect, useState} from 'react';
import { usersService} from "../services";

const Users = () => {

        let a = 4
        console.log(a)

    const {users,setUsers} = useState([]);

    useEffect(()=>{
        usersService.getAll().then(({data}) => setUsers(data))
    },[])


    return (
        <div>

        </div>
    );
};

export {Users};