import { api } from "./api";
import { IResponse } from "./loginRequest ";

export const searchUserDataRequest = async () => {
  const { data } = await api.get<IResponse>("/profile");
  return data.user.techs;
};
