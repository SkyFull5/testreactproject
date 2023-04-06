import { Typography } from "../index";
import s from "./Status.module.scss";
import cn from "classnames";

const Status = ({ status }) => {
  return (
    <div className={cn(s.wrapper, status ? s.active : s.inactive)}>
      <div className={cn(status ? s.active : s.inactive)}>
        <Typography size="big">{status ? "Active" : "Inactive"}</Typography>
      </div>
    </div>
  );
};

export default Status;
