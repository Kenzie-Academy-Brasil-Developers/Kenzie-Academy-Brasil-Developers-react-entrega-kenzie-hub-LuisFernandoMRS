/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { createTechRequest } from "../../services/createTechRequest";
import axios from "axios";
import { searchUserDataRequest } from "../../services/searchUserDataRequest";
import { ITech, IUser } from "../UserContext/AuthContext";

export interface ICreateTechs {
  title: string;
  status: string;
}

interface ITechsContext {
  techs: ITech[];
  searchUserData: () => void;
  createTech: (data: ICreateTechs) => void;
  deleteTech: (id_Tech: string) => void;
}

interface ITechsProps {
  children: ReactNode;
}

export const TechsContext = createContext<ITechsContext>({} as ITechsContext);

export const TechsProvider = ({ children }: ITechsProps) => {
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);

  const searchUserData = async () => {
    try {
      const response = await searchUserDataRequest();

      setTechs(response.techs!);
    } catch (error) {
      console.error(error);
    }
  };

  const createTech = async (data: ICreateTechs) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await createTechRequest(data);
      toast.success("Tecnologia criada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`${error.response?.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 1,
        });
      }
      console.error(error);
    }
  };

  const deleteTech = async (id_Tech: string) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.delete<ITech>(`/users/techs/${id_Tech}`);

      const removeTech = techs.filter(
        (techRemove: ITech) => techRemove.id !== id_Tech
      );

      setTechs(removeTech);
    } catch (error) {
      console.error(error);
      setTechs(techs);
    }
  };
  return (
    <TechsContext.Provider
      value={{ techs, searchUserData, createTech, deleteTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};
