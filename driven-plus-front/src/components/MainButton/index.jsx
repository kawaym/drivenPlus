import styled from "styled-components";

function MainButton({ children, style = null, onClick = () => {} }) {
  return (
    <SubmitButton bgColor={style} onClick={onClick}>
      {children}
    </SubmitButton>
  );
}

const SubmitButton = styled.button`
  width: 100%;
  height: 52px;

  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.button.main};

  color: ${(props) => props.theme.misc.white};
  font-family: ${(props) => props.theme.font.typography};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export default MainButton;
