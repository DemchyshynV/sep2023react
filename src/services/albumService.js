import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums)
}

export {
    albumService
}