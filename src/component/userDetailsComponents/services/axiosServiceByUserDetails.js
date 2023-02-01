import axios from "axios";

const getUserDetails = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'});

 const  getUserId = () => fetch(`https://jsonplaceholder.typicode.com/users/`).then(resp => resp.json())
export {getUserDetails,getUserId};