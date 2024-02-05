import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService(urls.users.base),
    getById: (id) => axiosService(urls.users.byId(id))
}

export {
    userService
}