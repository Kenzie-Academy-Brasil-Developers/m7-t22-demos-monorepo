import styles from "./styles.module.scss";
import { LoginForm } from "../../components/forms/LoginForm";

export const HomePage = () => {
  return (
    <main className="mainContainer">
      <div className="container sm">
        <div className={styles.flexBox}>
          <h2>kenziePOSTS</h2>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
