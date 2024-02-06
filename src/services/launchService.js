import {spaceXAPIService} from "./spaceXAPIService";
import {urls} from "../constants/urls";

const launchService = {
    getAll: () => spaceXAPIService.get(urls.launches)
}

export {
    launchService
}