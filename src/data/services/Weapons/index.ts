import { IWeapon } from "../../types/Weapons";
import { ApiResponseModel } from "../_default";
import api from "../api";

const getAll = async () => {
  const response = await api.get<ApiResponseModel<IWeapon[]>>("/agents");
  return response.data;
};

export const weaponService = {
  getAll,
};
