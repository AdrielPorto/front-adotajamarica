import { BigButtonStyle } from "./styles";

const BigButton = ({ children, ...restProps }) => {
  return <BigButtonStyle {...restProps}>{children}</BigButtonStyle>;
};

export default BigButton;
