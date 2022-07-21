import styled from "styled-components";

function PlanLogo({ src, size }) {
  return <LogoImage src={src} size={size} />;
}

const LogoImage = styled.img`
  width: ${(props) => (props.size === "big" ? "8em" : "4em")};
  height: ${(props) => (props.size === "big" ? "8em" : "4em")};
`;

export default PlanLogo;
