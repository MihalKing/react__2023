import axios from "axios";

const axiosServiceBySpaceX = axios.create({baseURL: 'https://api.spacexdata.com/v3/launches/'})

export {axiosServiceBySpaceX}


