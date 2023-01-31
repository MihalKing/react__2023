import {axiosService} from "./axiosService";

const postService = {
    getByUserId:(userId) =>axiosService.get('?post', {params:{userId}})
}
export {postService}