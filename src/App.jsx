import { useCallback, useState } from "react";
import { Header, Main, Sidebar } from "./components";
import { customers as customersAll, user } from "./tools/const";
import ContextStore from "./store/ContextStore";
import s from "./App.module.scss";

const App = () => {
  const [customers, setCustomers] = useState(customersAll);

  const handleSearchCustomer = useCallback((searchValue) => {
    const searchCustomer = customersAll.filter(
      (item) =>
        !!Object.values(item).filter(
          (value) => value.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        ).length
    );

    setCustomers(searchCustomer);
  }, []);

  return (
    <ContextStore.Provider value={{ user, customers, handleSearchCustomer }}>
      <Sidebar />
      <div className={s.wrapper}>
        <Header />
        <Main />
      </div>
    </ContextStore.Provider>
  );
};

export default App;
