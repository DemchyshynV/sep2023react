import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: (page = '1') => apiService.get(urls.cars.base, {params: {page}}),
    create: (data) => apiService.post(urls.cars.base, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}