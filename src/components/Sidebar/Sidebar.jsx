import { Logo } from "../../UI";
import TabList from "./TabList/TabList";
import s from "./Sidebar.module.scss";
import SidebarUserInfo from "./SidebarUserInfo/SidebarUserInfo";
import { useContextStore } from "../../hooks/useContextStore";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { ReactComponent as IconArrow } from "../../assets/img/icons/IconArrow.svg";
import cn from "classnames";

const Sidebar = () => {
  const { user } = useContextStore();
  const sizeWindow = useWindowSize();
  const [sizeLaptop, setSizeLaptop] = useState(true);

  const handleSmallSizeSidebar = () => {
    setSizeLaptop((prevState) => !prevState);
  };

  useEffect(() => {
    if (sizeWindow.width < 1300) {
      setSizeLaptop(false);
    } else {
      setSizeLaptop(true);
    }
  }, [sizeWindow]);

  console.log(sizeWindow);

  return (
    <aside
      className={cn(
        s.wrapper,
        sizeLaptop && sizeWindow.width <= 1300 && s.active
      )}
    >
      {sizeWindow.width <= 1300 && (
        <div className={s.activeTab} onClick={handleSmallSizeSidebar}>
          <IconArrow className={sizeLaptop && s.activeArrow} />
        </div>
      )}
      <section className={s.sidebarContent}>
        <Logo active={sizeLaptop} />
        <TabList sizeLaptop={sizeLaptop} />
      </section>
      <SidebarUserInfo user={user} sizeLaptop={sizeLaptop} />
    </aside>
  );
};

export default Sidebar;
