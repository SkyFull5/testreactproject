import { Input } from "../../UI";
import { ReactComponent as IconSearch } from "../../assets/img/icons/IconSearch.svg";
import s from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
    <label className={s.wrapper}>
      <IconSearch className={s.icon} />
      <Input isIcon={true} type="text" placeholder="Search" />
    </label>
  );
};

export default SearchInput;
