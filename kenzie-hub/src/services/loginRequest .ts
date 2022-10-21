import { ILoginPage } from "../pages/LoginPage";
import { api } from "./api";

export interface ITech {
  id: string;
  status: string;
  title: string;
}

export interface IUser {
  name: string;
  id: string;
  email: string;
  course_module: string;
  contact: string;
  bio: string;
  techs: ITech[];
}

export interface IResponse {
  token: string;
  user: IUser;
}

export const loginRequest = async (
  dataLogin: ILoginPage
): Promise<IResponse> => {
  const { data } = await api.post<IResponse>("/sessions", dataLogin);
  const { token } = data;
  window.localStorage.setItem("@KENZIEHUB:TOKEN", data.token);
  api.defaults.headers.common.authorization = ` Bearer ${token}`;
  return data;
};
