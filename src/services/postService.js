import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}