import CustomerList from "../../Customer/CustomerList";
import CustomerContentHeader from "../../Customer/CustomerContentHeader/CustomerContentHeader";
import s from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <section className={s.wrapper}>
      <CustomerContentHeader />
      <CustomerList />
    </section>
  );
};

export default MainContent;
