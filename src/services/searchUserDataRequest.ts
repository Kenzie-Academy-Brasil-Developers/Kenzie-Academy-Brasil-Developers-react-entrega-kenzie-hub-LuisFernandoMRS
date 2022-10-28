import { IUser } from "../contexts/UserContext/AuthContext";
import { api } from "./api";

export const searchUserDataRequest = async (): Promise<IUser> => {
  const { data } = await api.get<IUser>("/profile");
  return data;
};
