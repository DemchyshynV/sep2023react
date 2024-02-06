import axios from "axios";

import {spaceXBaseUrl} from "../constants/urls";

const spaceXAPIService = axios.create({baseURL: spaceXBaseUrl})

export {
    spaceXAPIService
}