import {useState} from "react";
import {postService} from "../services";
import {Post} from "../Post/Post";

const User = ({user}) => {
   const {id,name,userName,phone,email} = user;

   const [posts,setPosts] = useState([])

    const getPosts = () => {
      postService.getByUserId(id).then(({data}) => setPosts([...data]))
    }

    return (
        <div>
            <hr/>
            <div>id:{id}</div>
            <div>name :{name}</div>
            <div>userName :{userName}</div>
            <div>phone :{phone}</div>
            <div>email :{email}</div>
             <button style={{background:"pink", borderRadius:10}}
             onClick={()=> getPosts()}>
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
              User post
             </button>
            {!!posts.length && <button
                style={{background:"pink",borderRadius:6}}
                onClick={()=> setPosts([]) }>Hide post</button> }



        </div>
    );
};


export {User};

