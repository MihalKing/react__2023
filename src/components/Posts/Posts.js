import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import axios from "axios";
import {postsService} from "../../services";

const Posts = () => {
    const [posts,setPosts] = useState([]);

    // useEffect(()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(({data}) => setPosts([...data]))
    // },[])

    useEffect(()=> {
        postsService.getAll().then(({data})=> setPosts([...data]))
    },[])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};