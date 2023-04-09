import { Typography } from "../../../UI";
import s from "./SidebarUserInfo.module.scss";

const SidebarUserInfo = ({ user, sizeLaptop }) => {
  const { userAvatar, userName, userPosition } = user;

  return (
    <section className={s.wrapper}>
      <img
        className={s.avatar}
        src={userAvatar}
        alt={`This is an avatar ${userName}`}
      />
      {sizeLaptop && (
        <div className={s.userInfo}>
          <Typography type="p" size="medium">
            {userName}
          </Typography>
          <Typography type="p" size="small">
            {userPosition}
          </Typography>
        </div>
      )}
    </section>
  );
};

export default SidebarUserInfo;
