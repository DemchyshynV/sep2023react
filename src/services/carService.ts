import {IRes} from "../types";
import {ICar, IPagination} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars.base)
}

export {
    carService
}