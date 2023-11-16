import { IAgent } from "../../types/Agents";
import { ApiResponseModel } from "../_default";
import api from "../api";

const getAll = async () => {
  const response = await api.get<ApiResponseModel<IAgent[]>>("/agents");
  return response.data;
};

export const agentService = {
  getAll,
};
