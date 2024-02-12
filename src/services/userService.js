import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id) => apiService.get(urls.users.byId(id)),
    getPostsById: (userId) => apiService.get(urls.users.getPostsByUserId(userId))
}

export {
    userService
}