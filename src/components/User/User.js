import React from 'react';
import {Link} from "react-router-dom";
import {PostsPage} from "../../pages";

const User = ({user}) => {
    const {id,name,username} = user
    return (
        <div style={{ background : 'darkkhaki'}}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <Link to={'/posts'} element={<PostsPage/>}>posts</Link>
            <hr/>
        </div>
    );
};

export {User};