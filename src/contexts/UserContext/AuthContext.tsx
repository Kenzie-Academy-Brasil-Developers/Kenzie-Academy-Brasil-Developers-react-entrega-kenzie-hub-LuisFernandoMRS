/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { registerRequest } from "../../services/registerRequest";
import axios from "axios";
import { autoLogin } from "../../services/autoLogin";
interface IAuthenticationProviderProps {
  children: ReactNode;
}
export interface ITech {
  id: string;
  status: string;
  title: string;
}

export interface IUser {
  name?: string;
  id?: string;
  email: string;
  password: string;
  confirmpassword?: string;
  course_module?: string;
  contact?: string;
  bio?: string;
  techs?: ITech[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginRegister {
  user: IUser;
  token: string;
}

export interface IAuthenticationContext {
  user: IUser;
  handleLogin: (dataUser: IUser) => void;
  handleRegister: (dataRegister: IUser) => void;
  loading: boolean;
  userLogout: () => void;
  currentModal: boolean;
  setCurrentModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext
);
export const AuthenticationProvider = ({
  children,
}: IAuthenticationProviderProps) => {
  //
  const [user, setUser] = useState<IUser>({} as IUser);
  const [currentModal, setCurrentModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KENZIEHUB:TOKEN");
      if (token) {
        try {
          api.defaults.headers.common.authorization = ` Bearer ${token}`;
          const { data } = await api.get<IUser>("/profile");

          setUser(data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            toast.error(`${error.response?.data.message}`, {
              position: toast.POSITION.TOP_RIGHT,
              toastId: 1,
            });
            console.error(error);
            console.log("redirecionada para login");
            localStorage.removeItem("@KENZIEHUB:TOKEN");
            navigate("/");
          }
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [loading]);

  const handleLogin = async (dataUser: IUserLogin) => {
    try {
      const { data } = await api.post<ILoginRegister>("/sessions", dataUser);
      window.localStorage.setItem("@KENZIEHUB:TOKEN", data.token);
      api.defaults.headers.common.authorization = ` Bearer ${data.token}`;
      setUser(data.user);
      setLoading(true);

      navigate("/dashbord", { replace: true });
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

  const handleRegister = async (dataRegister: IUser) => {
    try {
      const response = await registerRequest(dataRegister);
      toast.success("Conta criada com sucesso!");
      navigate("/");
      console.log(response);
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

  const userLogout = () => {
    //setUser(null);
    setLoading(false);
    localStorage.removeItem("@KENZIEHUB:TOKEN");
    navigate("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        loading,
        userLogout,
        currentModal,
        setCurrentModal,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
