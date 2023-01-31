// import React, {useEffect, useState} from 'react';


// import {axiosServiceBySpaceX} from "../services/axiosService";
// import {Launch} from "../launch/launch";
// import axios from "axios";
//
// const Launches = (ship) => {
//     const {flight_number} = ship
//     const  [ships,setShips] = useState([]);
//
//     useEffect(()=>{
//         {
//
//              axios.get('https://api.spacexdata.com/v3/launches/').then(value => value.data).then().then(value => setShips([...value]))
//         }
//     },[])
//     return (
//         <div>
//             {ships.filter(ship => ship.launch_year !== '2020')(ship  =>  <Launch   key={ship.flight_number} ship={ship}/>)}
//         </div>
//     );
// };
//
// export {Launches};