import React from 'react';
import {Simpson} from "./component/SimpsonComponent/Simpson";
import {RickAndMortyComponent} from "./component/RickAndMortyComponent/RickAndMortyComponent";

const App = () => {
    return (
        <div>
            <div>
                <Simpson
                    id={'1'}
                    name={'Bart'}
                    status={false}
                    gender={'Male'}
                    species={'Human'}
                    image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
                />
                <Simpson
                    id={'2'}
                    name={'Lisa'}
                    status={false}
                    gender={'Female'}
                    species={'Human'}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbnb4l-wKMLwrUpF2YLwHN6rGTajREpV1-fC8LrfIIcZDFq8Vdhhx9XA4UpHFv6h39E4&usqp=CAU'}
                />
                <Simpson
                    id={'3'}
                    name={'Meggie'}
                    status={false}
                    gender={'Female'}
                    species={'Human'}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSEomrv9Qjedc1RibzFJ_-tRYYBZpa-Bt1Q&usqp=CAU'}
                />
                <Simpson
                    id={'4'}
                    name={'Marge'}
                    status={true}
                    gender={'Female'}
                    species={'Human'}
                    image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                />
                <Simpson
                    id={'5'}
                    name={'Homer'}
                    status={true}
                    gender={'Male'}
                    species={'Human'}
                    image={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
                />
            </div>
            <div>
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                    name={'Rick Sanchez'}
                    id={'1'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                    name={'Morty Smith'}
                    id={'2'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                    name={'Summer Smith'}
                    id={'3'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                />
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                    name={'Beth Smith'}
                    id={'4'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                />
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                    name={'Jerry Smith'}
                    id={'5'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <RickAndMortyComponent
                    image={'https://rickandmortyapi.com/api/character/avatar/7.jpeg'}
                    name={'Abadango Cluster Princess'}
                    id={'6'}
                    status={'Alive'}
                    species={'Alien'}
                    gender={'Female'}
                />
            </div>
        </div>

    );
};

export {App};
