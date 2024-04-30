import { DefaultTemplate } from "./components/DefaultTemplate";
import { HomePage } from "./pages/HomePage";
import { RoutesMain } from "./routes";

import "./styles/reset.css";
import "./styles/globals.css";

function App() {
  return (
    <>
      <DefaultTemplate>
        <RoutesMain />
      </DefaultTemplate>
    </>
  );
}

export default App;
