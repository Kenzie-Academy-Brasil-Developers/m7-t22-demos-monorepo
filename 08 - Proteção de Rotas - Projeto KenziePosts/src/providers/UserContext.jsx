import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const userId = localStorage.getItem("@kenziePosts:userId");
    const token = localStorage.getItem("@kenziePosts:token");

    const getUser = async () => {
      try {
        // setLoading(true)
        const { data } = await api.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    };

    if (userId && token) {
      getUser();
    }
  }, []);

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
      localStorage.setItem("@kenziePosts:userId", data.user.id);
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
    localStorage.removeItem("@kenziePosts:userId");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userLogout, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
