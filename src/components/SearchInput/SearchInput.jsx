import { Input } from "../../UI";
import { ReactComponent as IconSearch } from "../../assets/img/icons/IconSearch.svg";
import s from "./SearchInput.module.scss";
import { useContextStore } from "../../hooks/useContextStore";

const SearchInput = () => {
  const { handleSearchCustomer } = useContextStore();
  return (
    <label className={s.wrapper}>
      <IconSearch className={s.icon} />
      <Input
        isIcon={true}
        type="text"
        placeholder="Search"
        onChange={handleSearchCustomer}
      />
    </label>
  );
};

export default SearchInput;
