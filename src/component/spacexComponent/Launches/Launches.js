import {useEffect, useState} from "react";
import {axiosServiceBySpaceX} from "../services/axiosSpaceXService";
import {Launch} from "../Launch/Launch";


const Launches = () => {

    const [launches,setLaunches] = useState([])

    useEffect(() => {
        axiosServiceBySpaceX.get().then(({data}) => setLaunches([...data]))
    }, []);

    return (
        <div>
            {launches.map(ship => ship.launch_year !== '2020' &&
                <Launch key={ship.flight_number} ship={ship} />)}
        </div>
    );
};

export {Launches};