import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Components from "../";

function PlanCard({ plan }) {
  return (
    <Link to={`/subscriptions/${plan.id}`}>
      <CardContainer>
        <Components.PlanLogo src={plan.image} size={"big"} />
        <StyledPrice>R$ {plan.price.replace(".", ",")}</StyledPrice>
      </CardContainer>
    </Link>
  );
}

const CardContainer = styled.div`
  width: 100%;
  height: 10em;

  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: transparent;

  border: 3px solid ${(props) => props.theme.misc.grey};
  border-radius: 12px;
`;

const StyledPrice = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: ${(props) => props.theme.misc.white};
`;

export default PlanCard;
