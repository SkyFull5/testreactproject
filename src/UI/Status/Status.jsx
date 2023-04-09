import { Typography } from "../index";
import s from "./Status.module.scss";
import cn from "classnames";

const Status = ({ status }) => {
  return (
    <div className={cn(s.wrapper, status === "active" ? s.active : s.inactive)}>
      <div className={cn(status === "active" ? s.active : s.inactive)}>
        <Typography size="big">
          {status === "active" ? "Active" : "Inactive"}
        </Typography>
      </div>
    </div>
  );
};

export default Status;
