import styles from "./styles.module.scss";
import { RegisterForm } from "../../components/forms/RegisterForm";

export const RegisterPage = () => {
  return (
    <main className="mainContainer">
      <div className="container sm">
        <div className={styles.flexBox}>
          <h2>Cadastre-se</h2>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};
