import { IDataCreateTech } from "../components/Modal/RegisterTech";
import { api } from "./api";

export const createTechRequest = async (dataNewTech: IDataCreateTech) => {
  const { data } = await api.post("/users/techs", dataNewTech);

  return data;
};
