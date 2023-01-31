import {axiosService} from "./axiosService";

const usersService = {
    getAll: () => axiosService.get('/users'),
    getById: (id) => axiosService.get(`/users/${id}`)
}

export {usersService}