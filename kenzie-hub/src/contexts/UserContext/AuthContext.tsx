/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginPage } from "../../pages/LoginPage";
import { IRegisterPage } from "../../pages/RegisterPage";
import { api } from "../../services/api";
import { IUser, loginRequest } from "../../services/loginRequest ";
import { registerRequest } from "../../services/registerRequest";
import axios from "axios";
import { autoLogin } from "../../services/autoLogin";
interface IAuthenticationProviderProps {
  children: ReactNode;
}

interface IAuthenticationContext {
  user: IUser | null;
  handleLogin: (dataLogin: ILoginPage) => Promise<void>;
  handleRegister: (dataRegister: IRegisterPage) => Promise<void>;
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
  const [user, setUser] = useState<IUser | null>({} as IUser);
  const [currentModal, setCurrentModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KENZIEHUB:TOKEN");
      if (token) {
        try {
          api.defaults.headers.common.authorization = ` Bearer ${token}`;
          const response = await autoLogin();
          setUser(response.user);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            toast.error(`${error.response?.data.message}`, {
              position: toast.POSITION.TOP_RIGHT,
              toastId: 1,
            });
          }
          console.error(error);
          localStorage.removeItem("@KENZIEHUB:TOKEN");
          navigate("/");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const handleLogin = async (data: ILoginPage) => {
    try {
      const response = await loginRequest(data);
      setUser(response.user);

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

  const handleRegister = async (dataRegister: IRegisterPage) => {
    try {
      const response = registerRequest(dataRegister);
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
    setUser(null);
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
