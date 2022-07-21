import styled from "styled-components";

function FormInput({
  name,
  type,
  placeholder,
  handleChange,
  value,
  disabled,
  size = "full",
  align = null,
}) {
  return (
    <StyledInput
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      size={size}
      align={align}
    />
  );
}

const StyledInput = styled.input`
  width: ${(props) => (props.size === "full" ? "100%" : "47%")};
  height: 52px;

  background: #ffffff;
  border-radius: 8px;

  padding-left: 15px;

  align-self: ${(props) =>
    props.align === "start" ? "flex-start" : "flex-end"};

  ::placeholder {
    font-family: ${(props) => props.theme.font.typography};
    color: ${(props) => props.theme.font.placeholder};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;

export default FormInput;
