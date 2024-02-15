import {apiService} from "./apiService";
import {urls} from "../contants";

const commentService = {
    getByPostId: (postId) => apiService.get(urls.comments.base, {params: {postId}})
}

export {
    commentService
}