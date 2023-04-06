import { useState } from "react";
import s from "./Input.module.scss";
import cn from "classnames";

const Input = ({ type, placeholder, isIcon, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={cn(s.input, isIcon ? s.withIcon : "")}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
