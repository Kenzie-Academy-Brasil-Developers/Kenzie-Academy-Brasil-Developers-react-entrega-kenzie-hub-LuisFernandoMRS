import { Flip, ToastContainer } from "react-toastify";
import { AuthenticationProvider } from "./contexts/UserContext/AuthContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";
import { TechsProvider } from "./contexts/TechsContext/TechsContext";

function App() {
  return (
    <>
      <AuthenticationProvider>
        <TechsProvider>
          <RoutesMain />
        </TechsProvider>
      </AuthenticationProvider>

      <ToastContainer autoClose={1500} transition={Flip} />
    </>
  );
}

export default App;
