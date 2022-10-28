import { ILoginRegister } from "../contexts/UserContext/AuthContext";
import { api } from "./api";

export const autoLogin = async (token: string): Promise<ILoginRegister> => {
  api.defaults.headers.common.authorization = ` Bearer ${token}`;
  const { data } = await api.get<ILoginRegister>("/profile");

  return data;
};
