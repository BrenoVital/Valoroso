import axios from "axios";
import { Environment } from "../../../shared/enviroment";

const api = axios.create({
  baseURL: Environment.URL_BASE,
  params: {
    Language: "pt-BR",
  },
});

export default api;
