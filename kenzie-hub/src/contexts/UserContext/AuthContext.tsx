import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginPage } from "../../pages/LoginPage";
import { IRegisterPage } from "../../pages/RegisterPage";
import { api } from "../../services/api";
import { IResponse, IUser, loginRequest } from "../../services/loginRequest ";
import { registerRequest } from "../../services/registerRequest";

interface IAuthenticationProviderProps {
  children: ReactNode;
}

interface IAuthenticationContext {
  user: IResponse | [];
  userdata: IResponse | [];
  handleLogin: (data: ILoginPage) => Promise<void>;
  handleRegister: (data: IRegisterPage) => Promise<void>;
  loading: boolean;
  userLogout: () => void;
}

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext
);
export const AuthenticationProvider = ({
  children,
}: IAuthenticationProviderProps) => {
  const [userdata, setUserData] = useState<IResponse | []>([]);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KENZIEHUB:TOKEN");

      if (token) {
        try {
          api.defaults.headers.authorization = ` Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
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
      setUserData(response);
      navigate("/dashbord", { replace: true });
    } catch (error: any) {
      console.error(error);
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    }
  };

  const handleRegister = async (dataRegister: IRegisterPage) => {
    try {
      const response = registerRequest(dataRegister);
      toast.success("Conta criada com sucesso!");
      navigate("/");
      console.log(response);
    } catch (error: any) {
      console.error(error);
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    }
  };

  const userLogout = () => {
    setUser([]);
    setLoading(false);
    localStorage.removeItem("@KENZIEHUB:TOKEN");
    navigate("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        userdata,
        handleLogin,
        handleRegister,
        loading,
        userLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
