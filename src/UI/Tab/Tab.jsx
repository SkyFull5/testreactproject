import { Typography } from "../index";
import { ReactComponent as IconArrow } from "../../assets/img/icons/IconArrow.svg";
import cn from "classnames";
import s from "./Tab.module.scss";

const Tab = ({ label, icon, active, sizeLaptop }) => {
  return (
    <li className={cn(s.wrapper, active && s.active)}>
      <div className={s.tabInfo}>
        {icon}
        {sizeLaptop && (
          <Typography type="p" size="big">
            {label}
          </Typography>
        )}
      </div>
      {sizeLaptop && <IconArrow />}
    </li>
  );
};

export default Tab;
