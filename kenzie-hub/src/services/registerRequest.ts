import { IRegisterPage } from "../pages/RegisterPage";
import { api } from "./api";

export const registerRequest = async (dataRegister: IRegisterPage) => {
  const { data } = await api.post("/users", dataRegister);

  return data;
};
