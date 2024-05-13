import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // console.log(user);

  const userLogout = () => {
    /**
     * PRA LOGIN:
     *  1. Setar o estado 'user' com as informações da API.
     *  2. Guardar o token no localStorage '@kenziePosts:token'
     *  3. Redirecionar o usuario para '/user' (página de usuario)
     *
     * LOGOUT
     * 1. Setar o estado 'user' para null novamente
     * 2. Limpar a chave '@kenziePosts:token' do localStorage
     * 3. Redirecionar para a página de '/' (página de login)
     */
    console.log("logout chamado!!");

    // 1
    setUser(null);
    // 2
    localStorage.removeItem("@kenziePosts:token");
    // 3
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/user"
        element={<UserPage user={user} userLogout={userLogout} />}
      />
    </Routes>
  );
};
