import styles from "./styles.module.css";
import { RegisterForm } from "../../components/forms/RegisterForm";

export const RegisterPage = () => {
  return (
    <main className={styles.registerPage}>
      <h2>Olá eu sou uma Página de REGISTRO</h2>
      <RegisterForm />
    </main>
  );
};
