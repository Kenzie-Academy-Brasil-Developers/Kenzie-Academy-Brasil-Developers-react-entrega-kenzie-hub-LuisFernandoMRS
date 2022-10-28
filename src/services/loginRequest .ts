import { ILoginRegister, IUser } from "../contexts/UserContext/AuthContext";
import { api } from "./api";

export const loginRequest = async (
  dataLogin: IUser
): Promise<ILoginRegister | undefined> => {
  const { data } = await api.post<ILoginRegister>("/sessions", dataLogin);

  window.localStorage.setItem("@KENZIEHUB:TOKEN", data.token);
  api.defaults.headers.common.authorization = ` Bearer ${data.token}`;
  return data;
};
