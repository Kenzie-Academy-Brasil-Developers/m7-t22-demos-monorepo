import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { CreateScrapForm } from "../../components/forms/CreateScrapForm";

export const CreateScrapPage = () => {
  return (
    <DefaultTemplate>
      <main className={styles.createScrapPage}>
        <div className="container sm">
          <Link className="link">
            <MdArrowBack />
            voltar
          </Link>
          {/* FORMULARIO DE ENVIO PARA UM SCRAP */}
          <CreateScrapForm />
        </div>
      </main>
    </DefaultTemplate>
  );
};
