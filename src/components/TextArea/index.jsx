import { useState } from "react";

import { Container } from "./styles";

const TextArea = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <Container
      className={isFocused ? "input__focused" : ""}
      {...rest}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    ></Container>
  );
};

export default TextArea;
