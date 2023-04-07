import "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { user } from "./tools/const";
import ContextStore from "./store/ContextStore";
import Header from "./components/Header/Header";
import s from "./App.module.scss";
import Main from "./components/MainContent/Main";

const App = () => {
  return (
    <ContextStore.Provider value={{ user }}>
      <Sidebar />
      <div className={s.wrapper}>
        <Header />
        <Main />
      </div>
    </ContextStore.Provider>
  );
};

export default App;
