import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ user, userLogout }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/">
            <h1>KenziePOSTS</h1>
          </Link>
          <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <button onClick={() => userLogout()} className="btn outline">
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
