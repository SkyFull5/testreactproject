import s from "./Typography.module.scss";

const Typography = ({ type, children, size }) => {
  if (type === "h1") {
    return <h1 className={s[size]}>{children}</h1>;
  } else if (type === "h2") {
    return <h2 className={s[size]}>{children}</h2>;
  } else if (type === "h3") {
    return <h3 className={s[size]}>{children}</h3>;
  }
  return <p className={s[size]}>{children}</p>;
};

export default Typography;
