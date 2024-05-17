import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { CreateScrapPage } from "../pages/CreateScrapPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rota a ser protegida */}
      <Route element={<PrivateRoutes />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/create" element={<CreateScrapPage />} />
      </Route>
    </Routes>
  );
};
