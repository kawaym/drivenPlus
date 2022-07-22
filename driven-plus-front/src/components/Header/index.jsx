import styled from "styled-components";

function Header({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.header`
  width: 80vw;
  height: 75px;

  position: absolute;
  top: 0%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default Header;
