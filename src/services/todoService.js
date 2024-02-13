import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const todoService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todoService
}