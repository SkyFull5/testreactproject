import { Logo } from "../../UI";
import TabList from "./TabList/TabList";
import s from "./Sidebar.module.scss";
import SidebarUserInfo from "./SidebarUserInfo/SidebarUserInfo";
import { useContextStore } from "../../hooks/useContextStore";

const Sidebar = () => {
  const { user } = useContextStore();

  return (
    <aside className={s.wrapper}>
      <section className={s.sidebarContent}>
        <Logo />
        <TabList />
      </section>
      <SidebarUserInfo user={user} />
    </aside>
  );
};

export default Sidebar;
