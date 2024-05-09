import styles from "./styles.module.css";
import { Link } from "react-router-dom";

/**
 *
 * SPA -> Single Page Aplication
 */

// tag <a> -> vamos utilizar para redirecionamentos EXTERNOS
// componente <Link>  -> vamos utilizar para redirecionamenos INTERNOS

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Kenzie Commerce</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <a href="http://facebook.com.br" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
