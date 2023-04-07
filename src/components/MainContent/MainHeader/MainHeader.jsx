import { Typography } from "../../../UI";
import s from "./MainHeader.module.scss";
import { SearchInput } from "../../index";

const MainHeader = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.headerInfo}>
        <Typography type="h3" size="big">
          All Customers
        </Typography>
        <Typography type="p" size="medium">
          Active Members
        </Typography>
      </div>
      <SearchInput />
    </section>
  );
};

export default MainHeader;
