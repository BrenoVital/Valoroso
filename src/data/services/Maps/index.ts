import { IMap } from "../../types/Maps";
import { ApiResponseModel } from "../_default";
import api from "../api";

const getAll = async () => {
  const response = await api.get<ApiResponseModel<IMap[]>>("/maps");
  return response.data;
};

export const mapsService = {
  getAll,
};
