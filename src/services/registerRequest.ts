import { ILoginRegister, IUser } from "../contexts/UserContext/AuthContext";
import { api } from "./api";

export const registerRequest = async (dataRegister: IUser) => {
  const { data } = await api.post<ILoginRegister>("/users", dataRegister);

  return data;
};
