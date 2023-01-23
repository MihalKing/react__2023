import React from 'react';

import {RickAndMortyComponents, Simpsons} from "./component";

const App = () => {

    return (
        <div>
            <div>
                <div><img src={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'} alt={'rick'}/></div>
                <Simpsons/>
            </div>
            <div>
                <RickAndMortyComponents/>

            </div>
        </div>

    );
};

export {App};
