import { Greeting } from "../../UI";
import { useContextStore } from "../../hooks/useContextStore";
import s from "./Header.module.scss";

const Header = () => {
  const { user } = useContextStore();
  return (
    <header className={s.wrapper}>
      <Greeting userName={user.userName} />
    </header>
  );
};

export default Header;
