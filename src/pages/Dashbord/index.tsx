import { useContext } from "react";
import { AllStructureDashbord } from "../../components/DashboardStructure/AllStructure";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";

export const Dashbord = () => {
  const { user, loading } = useContext(AuthenticationContext);
  if (loading) {
    return null;
  }
  return (
    <>
      {!user ? (
        <h1>loading</h1>
      ) : (
        <>
          <Nav />
          <Header />
          <AllStructureDashbord />
        </>
      )}
    </>
  );
};
