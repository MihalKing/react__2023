import React from 'react';
import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            status: true,
            gender: 'Male',
            species: 'Human',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            status: true,
            gender: 'Female',
            species: 'Human',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 3,
            name: 'Lisa',
            surname: 'Simpson',
            status: false,
            gender: 'Female',
            species: 'Human',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbnb4l-wKMLwrUpF2YLwHN6rGTajREpV1-fC8LrfIIcZDFq8Vdhhx9XA4UpHFv6h39E4&usqp=CAU'
        },
        {
            id: 4,
            name: 'Bart',
            surname: 'Simpson',
            status: false,
            gender: 'Male',
            species: 'Human',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id: 5,
            name: 'Meggie',
            surname: 'Simpson',
            status: false,
            gender: 'Female',
            species: 'Human',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSEomrv9Qjedc1RibzFJ_-tRYYBZpa-Bt1Q&usqp=CAU'
        }
    ]
    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} name={simpson.name}
            surname={simpson.surname} status={simpson.status} gender={simpson.gender}
            specieles={simpson.species} image={simpson.image}
            />)}
        </div>
    );
};

export {Simpsons};