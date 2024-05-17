import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ScrapList } from "../../components/ScrapList";

export const UserPage = () => {
  return (
    <DefaultTemplate>
      <main className="mainContainer">
        <div className="container">
          <ScrapList />
        </div>
      </main>
    </DefaultTemplate>
  );
};
