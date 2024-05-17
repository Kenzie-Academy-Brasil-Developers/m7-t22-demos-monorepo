import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ScrapContext = createContext({});

export const ScrapProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [scrapList, setScrapList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getScraps = async () => {
      try {
        const { data } = await api.get("/scraps");
        setScrapList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getScraps();
  }, []);

  const createScrap = async (formData) => {
    try {
      const token = localStorage.getItem("@kenziePosts:token");

      const newScrap = {
        author: user.name,
        email: user.email,
        userId: user.id,
        ...formData,
      };

      const { data } = await api.post("/scraps", newScrap, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setScrapList([...scrapList, data]);
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteScrap = async (scrapId) => {
    try {
      const token = localStorage.getItem("@kenziePosts:token");
      await api.delete(`/scraps/${scrapId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedScrapList = scrapList.filter(
        (scrap) => scrap.id !== scrapId
      );
      setScrapList(updatedScrapList);
      toast.success("Scrap excluido com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrapContext.Provider value={{ scrapList, createScrap, deleteScrap }}>
      {children}
    </ScrapContext.Provider>
  );
};
