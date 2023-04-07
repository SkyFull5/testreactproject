import { Typography } from "../index";

const Greeting = ({ userName }) => {
  return (
    <Typography type="h2" size="big">
      Hello {userName} &#x1f44b;&#x1f3fc;,
    </Typography>
  );
};

export default Greeting;
