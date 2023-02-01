import React from 'react';
import {UserDetailAdd} from "../UserDetailAdd/UserDetailAdd";

const UsersDetail = ({userDetail,oneSelectUser,user}) => {
   const {name,id} = userDetail
    const {username} = user
    return (
        <div>
            <div>user_id {id}</div>
            <div>name: {name}</div>
            <button
                onClick={()=>  oneSelectUser(id)}
                style={{background: "pink",borderRadius:6}}>
                User detail
            </button>
            <div>username:{username}</div>
            <hr/>
        </div>
    );
};

export {UsersDetail};