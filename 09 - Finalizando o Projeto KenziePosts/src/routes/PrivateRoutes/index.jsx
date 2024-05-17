import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";
import { ScrapProvider } from "../../providers/ScrapContext";

/*
- Outlet -> semelhante ao children -> irá renderizar a rota 'filha'
- Navigate -> redirecionamento através de componente
*/

export const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <ScrapProvider>
      <Outlet />
    </ScrapProvider>
  ) : (
    <Navigate to="/" />
  );
};
