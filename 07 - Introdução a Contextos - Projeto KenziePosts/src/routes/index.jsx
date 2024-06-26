import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};
