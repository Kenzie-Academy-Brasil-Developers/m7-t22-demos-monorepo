import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaultTemplate = ({ children, user, userLogout }) => {
  return (
    <>
      <Header user={user} userLogout={userLogout} />
      {children}
      <Footer />
    </>
  );
};
