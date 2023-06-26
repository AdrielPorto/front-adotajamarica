import { BigButton } from "./styles";

export const BigButtonLink = ({ children, ...restProps }) => {
  return <BigButton {...restProps}>{children}</BigButton>;
};
