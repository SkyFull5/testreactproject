import { useContextStore } from "../../hooks/useContextStore";
import CustomerItem from "./CustomerItem/CustomerItem";
import s from "./CustomerList.module.scss";
import { Typography } from "../../UI";

const CustomerList = () => {
  const { customers } = useContextStore();
  return (
    <ul className={s.wrapper}>
      {customers.length ? (
        customers.map((customer) => <CustomerItem customer={customer} />)
      ) : (
        <div className={s.notExist}>
          <Typography type="h3">This customer does not exist</Typography>
        </div>
      )}
    </ul>
  );
};

export default CustomerList;
