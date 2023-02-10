import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getAll:() => axiosService.get(urls.users)
}

export {usersService}