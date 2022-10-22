import { Flip, ToastContainer } from "react-toastify";
import { AuthenticationProvider } from "./contexts/UserContext/AuthContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";
<<<<<<< HEAD:kenzie-hub/src/App.tsx
=======

>>>>>>> e6e84c6a0e1c32f8dadef53c6b1b9dff7d67dc4a:kenzie-hub/src/App.jsx
import { TechsProvider } from "./contexts/TechsContext/TechsContext";

function App() {
  return (
    <>
      <AuthenticationProvider>
        <TechsProvider>
<<<<<<< HEAD:kenzie-hub/src/App.tsx
          <RoutesMain />
=======
          <ModalProvider>
            <RoutesMain />
          </ModalProvider>
>>>>>>> e6e84c6a0e1c32f8dadef53c6b1b9dff7d67dc4a:kenzie-hub/src/App.jsx
        </TechsProvider>
      </AuthenticationProvider>

      <ToastContainer autoClose={1500} transition={Flip} />
    </>
  );
}

export default App;
