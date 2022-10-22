/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { createTechRequest } from "../../services/createTechRequest";
import { ITech } from "../../services/loginRequest ";
import axios from "axios";
import { searchUserDataRequest } from "../../services/searchUserDataRequest";
import { IDataCreateTech } from "../../components/Modal/RegisterTech";

interface ITechsContext {
  techs: ITech[];
  searchUserData: () => void;
  createTech: (data: IDataCreateTech) => Promise<void>;
  deleteTech: (id_Tech: string) => Promise<void>;
}

interface ITechsProps {
  children: ReactNode;
}

export const TechsContext = createContext<ITechsContext>({} as ITechsContext);

export const TechsProvider = ({ children }: ITechsProps) => {
  const [techs, setTechs] = useState<ITech[] | []>([]);

  const searchUserData = async () => {
    try {
      const response = await searchUserDataRequest();

      setTechs(response.techs);
    } catch (error) {
      console.error(error);
    }
  };

  const createTech = async (data: IDataCreateTech) => {
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
      const response = await api.delete(`/users/techs/${id_Tech}`);

      const removeTech = techs.filter(
        (techRemove) => techRemove.id !== id_Tech
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
