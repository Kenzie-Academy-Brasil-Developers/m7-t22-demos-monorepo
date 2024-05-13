import { DefaultTemplate } from "../../components/DefaultTemplate";

export const UserPage = ({ user, userLogout }) => {
  return (
    <DefaultTemplate user={user} userLogout={userLogout}>
      <main className="mainContainer">
        <div className="container">
          <h1>Bem vindo a página de usuário</h1>
        </div>
      </main>
    </DefaultTemplate>
  );
};
