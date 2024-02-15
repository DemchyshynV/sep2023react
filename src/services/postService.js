import {apiService} from "./apiService";
import {urls} from "../contants";

const postService = {
    getByUserId: (userId) => apiService.get(urls.posts.base, {params: {userId}}),
    byId: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}