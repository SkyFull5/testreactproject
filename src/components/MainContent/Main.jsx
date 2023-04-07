import s from "./Main.module.scss";
import MainHeader from "./MainHeader/MainHeader";
import MainContent from "./MainContent/MainContent";

const Main = () => {
  return (
    <main className={s.wrapper}>
      <MainHeader />
      <MainContent />
    </main>
  );
};

export default Main;
