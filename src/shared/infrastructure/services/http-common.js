import axios from "axios";

/**
 * @summary base http client for local json-server Rest Api
 * @author Andre Sebastian Quispe Almonacid
 */

export const localHttp = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_API_BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

/**
 * @summary  base http client for external Apis
 * @author Andre Sebastian Quispe Almonacid
 */

export const http = axios.create({
    headers: {'Content-Type': 'application/json'}
})