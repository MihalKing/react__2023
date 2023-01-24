import React from 'react';

const UserDetails = ({user }) => {
    let {id} = user
    return (
        <div>
            <div>id:{id}</div>

        </div>
    );
};

export {UserDetails};