import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
    errorHandlerMiddleWare,
    requestMiddleWare,
    responseMiddleWare,
} from "../httpInterSeptur/HttpInterSeptur";
import CryptoJS from "crypto-js";

function hashStringWithSecretKey(string, secretKey) {
    const hmac = CryptoJS.HmacSHA256(string, secretKey);
    const hash = hmac.toString(CryptoJS.enc.Base64);
    return hash;
}
const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // Set timeout to 10 seconds (adjust as needed)
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        console.log(config.data);
        const base64 = btoa(JSON.stringify(config.data));
        const checkSum = hashStringWithSecretKey(
            base64,
            "jbuyviycutxydrxyrxyddyxyrdx"
        );
        config.data = { base64, checkSum };

        const modifiedConfig = requestMiddleWare(config);
        console.log(modifiedConfig);

        return modifiedConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Apply response middleware logic
        const modifiedResponse = responseMiddleWare(response);
        return modifiedResponse;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
