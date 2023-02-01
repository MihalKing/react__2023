import React, {useEffect, useState} from 'react';
import {getUserDetails,getUserId} from "../services/axiosServiceByUserDetails";
import {UsersDetail} from "../UsersDetail/UsersDetail";

const UsersDetails = () => {
    const [usersDetails,setUsersDetails] = useState([]);
    const [userId,setUserId] = useState([]);
    const [user,setUser] = useState([]);


    useEffect(()=>{
        getUserDetails().then(({data}) => setUsersDetails([...data]))
    },[])

    useEffect(()=>{
        getUserId(userId).then(({data}) =>  setUser([...data]))
    },[userId])

    return (
        <div>
            {usersDetails.map(userDetail =>
                <UsersDetail key={userDetail.id} userDetail={userDetail}
                              oneSelectUser={setUserId} user={user}/> )}

        </div>
    );
};

export {UsersDetails};