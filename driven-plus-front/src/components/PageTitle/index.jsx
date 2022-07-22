import styled from "styled-components";

function PageTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  margin-bottom: 50px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: ${(props) => props.theme.misc.white};
`;

export default PageTitle;
