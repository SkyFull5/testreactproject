import { tabsContent } from "./TabList.utils";
import { Tab } from "../../../UI";
import s from "./TabList.module.scss";

const TabList = () => {
  return (
    <ul className={s.wrapper}>
      {tabsContent.map((tab) => (
        <Tab key={tab.label} label={tab.label} icon={tab.icon} />
      ))}
    </ul>
  );
};

export default TabList;
