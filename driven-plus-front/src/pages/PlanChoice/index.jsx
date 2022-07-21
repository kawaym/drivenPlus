import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as Components from "../../components";
import * as planApi from "../../services/api/plan";
import useAuth from "../../hooks/Auth";

function PlanChoice() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [plans, setPlans] = useState({});
  const { userData } = useAuth();

  useEffect(() => {
    getPlans();
  }, []);

  async function getPlans() {
    try {
      const data = await planApi.listPlans(userData.token);
      setPlans(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      alert("Falha ao encontrar os planos disponíveis");
    }
  }
  return (
    <Components.Background>
      <PageTitle>Escolha seu Plano</PageTitle>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <PlansContainer>
          {plans.map((plan) => {
            console.log(plan);
            return <Components.PlanCard plan={plan} />;
          })}
        </PlansContainer>
      )}
    </Components.Background>
  );
}

const PageTitle = styled.h1`
  margin-bottom: 50px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: ${(props) => props.theme.misc.white};
`;

const PlansContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default PlanChoice;
