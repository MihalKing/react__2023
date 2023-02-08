import {axiosService} from "./axiosService";
import {urls} from "../configs";

const  postsService = {
    getAll:() => axiosService.get(urls.post),
    getById:(id) => axiosService.get(`${urls.post}${id}`)
}

export {postsService}