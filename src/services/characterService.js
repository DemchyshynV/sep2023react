import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll: (page) => apiService.get(urls.characters, {params: {page}})
}

export {
    characterService
}