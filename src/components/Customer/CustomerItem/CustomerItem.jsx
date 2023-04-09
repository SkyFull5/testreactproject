import s from "./CustomerItem.module.scss";
import { Status, Typography } from "../../../UI";

const CustomerItem = ({ customer }) => {
  const { customerName, company, phoneNumber, email, country, status } =
    customer;

  return (
    <li className={s.wrapper}>
      <Typography type="p" size="medium">
        {customerName}
      </Typography>
      <Typography type="p" size="medium">
        {company}
      </Typography>
      <Typography type="p" size="medium">
        {phoneNumber}
      </Typography>
      <Typography type="p" size="medium">
        {email}
      </Typography>
      <Typography type="p" size="medium">
        {country}
      </Typography>
      <Status status={status} />
    </li>
  );
};

export default CustomerItem;
