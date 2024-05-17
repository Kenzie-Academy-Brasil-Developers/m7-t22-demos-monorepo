import { LoginForm } from "../../components/forms/LoginForm";

export const HomePage = () => {
  return (
    <main className="mainContainer">
      <div className="container sm">
        <div className="flexBox">
          <h2 className="title brand">kenziePOSTS</h2>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
