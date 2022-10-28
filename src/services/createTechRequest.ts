import { ICreateTechs } from "../contexts/TechsContext/TechsContext";
import { ITech } from "../contexts/UserContext/AuthContext";
import { api } from "./api";

export const createTechRequest = async (
  dataNewTech: ICreateTechs
): Promise<ITech | undefined> => {
  const { data } = await api.post<ITech>("/users/techs", dataNewTech);

  return data;
};
