import { tabsContent } from "./TabList.utils";
import { Tab } from "../../../UI";
import s from "./TabList.module.scss";

const TabList = ({ sizeLaptop }) => {
  return (
    <ul className={s.wrapper}>
      {tabsContent.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          active={tab.active}
          sizeLaptop={sizeLaptop}
        />
      ))}
    </ul>
  );
};

export default TabList;
