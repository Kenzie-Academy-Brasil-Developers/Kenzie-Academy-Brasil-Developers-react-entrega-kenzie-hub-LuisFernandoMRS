import { useContext } from "react";
import { AllStructureDashbord } from "../../components/DashboardStructure/AllStructure";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";

export const Dashbord = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <>
      <Nav />

      {user.length === 0 ? (
        <h1>loading</h1>
      ) : (
        <>
          <Header />
          <AllStructureDashbord />
        </>
      )}
    </>
  );
};
