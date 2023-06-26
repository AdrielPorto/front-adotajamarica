import { useState } from "react";
import InputMask from "react-input-mask";
import { Container } from "./styles";

const Input = ({ icon: Icon, error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <Container className={isFocused ? `input__focused ${error}` : error}>
      {Icon && <Icon size={20} className={isFocused ? "color__focused" : ""} />}
      <InputMask
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;
