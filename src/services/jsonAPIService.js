import axios from "axios";

import {jsonBaseUrl} from "../constants/urls";

const jsonAPIService = axios.create({baseURL: jsonBaseUrl})

export {
    jsonAPIService
}