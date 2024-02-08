import axios from "axios";

import {baseURL} from "../contants/urls";

const apiService = axios.create({baseURL})

export {
    apiService
}