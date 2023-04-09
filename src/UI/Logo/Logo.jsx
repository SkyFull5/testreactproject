import { Typography } from "../index";
import { ReactComponent as IconLogo } from "../../assets/img/icons/IconLogo.svg";
import s from "./Logo.module.scss";

const Logo = ({ active }) => {
  console.log(active);
  return (
    <div className={s.wrapper}>
      <IconLogo />
      {!!active && (
        <div className={s.wrapperText}>
          <Typography type="h1" size="big">
            Dashboard
          </Typography>
          <div className={s.version}>
            <Typography type="p" size="verySmall">
              v.01
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
