import { Container } from "./style";

import { RiArrowDropDownLine } from "react-icons/ri";

const Select = ({ options, ...rest }) => {
  return (
    <Container>
      <select {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <RiArrowDropDownLine size={40} className="custom-icon" />
    </Container>
  );
};

export default Select;
