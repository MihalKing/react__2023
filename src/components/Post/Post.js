import React from 'react';

const Post = ({post}) => {
    const {userId,title} = post
    return (
        <div style={{ background : 'darkkhaki'}}>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <hr/>
        </div>
    );
};

export {Post};