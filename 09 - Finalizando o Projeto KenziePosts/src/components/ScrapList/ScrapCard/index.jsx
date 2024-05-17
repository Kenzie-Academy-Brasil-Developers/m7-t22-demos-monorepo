import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { ScrapContext } from "../../../providers/ScrapContext";

/*
  DESAFIO:
  - Implementar uma forma de ATUALIZAR o scrap (utilizar método PATCH da documentação)
*/
export const ScrapCard = ({ scrap }) => {
  const { user } = useContext(UserContext);
  const { deleteScrap } = useContext(ScrapContext);

  return (
    <li className={styles.scrapCard}>
      <div>
        <span>
          <strong>{scrap.author}</strong> {scrap.email}
        </span>
        <p className="paragraph">{scrap.content}</p>
      </div>
      <div>
        {user.id === scrap.userId && (
          <>
            {/* CRIAR OUTRA FUNÇÃO DE UPDATE PARA O BOTÃO ABAIXO */}
            <button>
              <MdOutlineEdit size={30} />
            </button>
            <button onClick={() => deleteScrap(scrap.id)}>
              <MdOutlineDelete size={30} />
            </button>
          </>
        )}
      </div>
    </li>
  );
};
