import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";

import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={1 * 1000} position="top-center" />
    </>
  );
}

export default App;
