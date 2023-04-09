import { ReactComponent as IconDashboard } from "../../../assets/img/icons/IconDashboard.svg";
import { ReactComponent as IconProduct } from "../../../assets/img/icons/IconProduct.svg";
import { ReactComponent as IconCustomers } from "../../../assets/img/icons/IconCustomers.svg";
import { ReactComponent as IconIncome } from "../../../assets/img/icons/IconIncome.svg";
import { ReactComponent as IconPromote } from "../../../assets/img/icons/IconPromote.svg";
import { ReactComponent as IconHelp } from "../../../assets/img/icons/IconHelp.svg";

export const tabsContent = [
  {
    label: "Dashboard",
    icon: <IconDashboard />,
    active: false,
  },
  {
    label: "Product",
    icon: <IconProduct />,
    active: false,
  },
  {
    label: "Customers",
    icon: <IconCustomers />,
    active: true,
  },
  {
    label: "Income",
    icon: <IconIncome />,
    active: false,
  },
  {
    label: "Promote",
    icon: <IconPromote />,
    active: false,
  },
  {
    label: "Help",
    icon: <IconHelp />,
    active: false,
  },
];
