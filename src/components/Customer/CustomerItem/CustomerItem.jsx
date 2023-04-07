import s from "./CustomerItem.module.scss";
import { Typography } from "../../../UI";
import { customerContentHeaderLabel } from "../../../tools/const";

const CustomerContentHeader = () => {
  return (
    <li className={s.wrapper}>
      {customerContentHeaderLabel.map((item) => (
        <Typography type="p" size="medium" key={item}>
          {item}
        </Typography>
      ))}
    </li>
  );
};

export default CustomerContentHeader;
