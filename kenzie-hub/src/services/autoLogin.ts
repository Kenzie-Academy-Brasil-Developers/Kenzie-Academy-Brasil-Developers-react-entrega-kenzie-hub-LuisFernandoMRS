import { api } from "./api";
import { IResponse } from "./loginRequest ";

export const autoLogin = async (): Promise<IResponse> => {
  const { data } = await api.get<IResponse>("/profile");

  return data;
};
