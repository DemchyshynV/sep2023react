import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonAPIService.get(urls.posts)
}

export {
    postService
}