import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

// CONTEXT API -> GERENCIADOR DE CONTEXTO
/*
  Prop Drilling (Perfurar/Escavar)
*/
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      console.log(response.data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      // console.log(error.response.data);
      if (error.response.data === "Email already exists") {
        toast.error("Email já cadastrado!");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);

      setUser(data.user);
      localStorage.setItem("@kenziePosts:token", data.accessToken);
      navigate("/user");
    } catch (error) {
      // console.log(error);
      if (error.response.data === "Incorrect password") {
        // console.log("Credenciais inválidas");
        toast.error("Credenciais Inválidas!");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@kenziePosts:token");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userLogout, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
