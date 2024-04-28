import axios from "axios";
import { getApiConfig } from "../configs/api.config";

const apiConfig = getApiConfig();

const instance = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 5000,
});

export default instance;
