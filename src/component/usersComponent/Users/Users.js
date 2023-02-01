import {useEffect, useState} from "react";
import {usersService} from "../services";
import {User} from "../User/User";


const Users = ({setUserId}) => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        usersService.getAll().then(({data}) => setUsers([...data]))
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};