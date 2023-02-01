import {useEffect, useState} from "react";
import {postService} from "../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        postService.getByUserId(userId).then(({data}) => setPosts([...data]))
    },[])

    return (
        <div>
            {posts.filter(value => value.id === 1
                || value.id === 11
                || value.id === 21
                || value.id === 31
                || value.id === 41
                || value.id === 51
                || value.id === 61
                || value.id === 71
                || value.id === 81
                || value.id === 91
            ).map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};