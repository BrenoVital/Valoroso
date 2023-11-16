import { IElo } from "../../types/Elos";
import { ApiResponseModel } from "../_default";
import api from "../api";

const getAll = async () => {
  const response = await api.get<ApiResponseModel<IElo[]>>("/competitivetiers");
  return response.data;
};

export const eloService = {
  getAll,
};
