import { api } from "./api";

interface ISearch {
  techs: [
    {
      id: string;
      status: string;
      title: string;
    }
  ];
}

export const searchUserDataRequest = async () => {
  const { data } = await api.get<ISearch>("/profile");

  return data;
};
