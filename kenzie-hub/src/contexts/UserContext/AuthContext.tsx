import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginPage } from "../../pages/LoginPage";
import { IRegisterPage } from "../../pages/RegisterPage";
import { api } from "../../services/api";

interface IAuthenticationProviderProps {
  children: ReactNode;
}

interface IAuthenticationContext {
  user: any;
  userdata: any;
  handleLogin: () => void;
  handleRegister: () => void;
  loading: boolean;
  userLogout: () => void;
}

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext
);
export const AuthenticationProvider = ({
  children,
}: IAuthenticationProviderProps) => {
  const [userdata, setUserData] = useState([]);
  const [user, setUser] = useState(null);
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
      const response = await api.post("/sessions", data);

      window.localStorage.setItem("@KENZIEHUB:TOKEN", response.data.token);
      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = ` Bearer ${token}`;

      setUser(userResponse);
      setUserData(userResponse);
      navigate("/dashbord", { replace: true });
    } catch (error: any) {
      console.error(error);
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    }
  };

  const handleRegister = async (data: IRegisterPage) => {
    try {
      const response = await api.post("/users", data);
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
    setUser(null);
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
