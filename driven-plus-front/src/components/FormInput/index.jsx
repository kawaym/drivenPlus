import styled from "styled-components";

function FormInput({ name, type, placeholder, handleChange, value, disabled }) {
  return (
    <StyledInput
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      disabled={disabled}
    />
  );
}

const StyledInput = styled.input`
  width: 100%;
  height: 52px;

  background: #ffffff;
  border-radius: 8px;

  padding-left: 15px;

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
