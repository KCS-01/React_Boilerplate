import axios from "axios";

import { config } from "./config";

const axiosConfig = axios.create({
    baseURL: `http://${config.API_HOST}:${config.API_PORT}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosConfig;
