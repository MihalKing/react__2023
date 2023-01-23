import React from 'react';
import {RickAndMortyComponent} from "./RickAndMortyComponent";

const RickAndMortyComponents = () => {
    const RickAndMortyComponents = [
        {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id: 3,
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        }, {
            id: 4,
            name: 'Beth Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
        },
        {
            id: 5,
            name: 'Jerry Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
        },
        {
            id: 6,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
        }
    ]

    return (
        <div>
            {RickAndMortyComponents.map(character => <RickAndMortyComponent
                key={character.id} name={character.name}
                status={character.status} species={character.species}
                gender={character.gender} image={character.image}/>)}
        </div>
    );
};

export {RickAndMortyComponents};