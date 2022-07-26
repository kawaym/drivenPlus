import { useEffect, useState } from "react";
import styled from "styled-components";

import * as Components from "../../components";
import * as planApi from "../../services/api/plan";
import useAuth from "../../hooks/Auth";

function PlanChoice() {
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
      <Components.PageTitle>Escolha seu Plano</Components.PageTitle>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <PlansContainer>
          {plans.map((plan) => {
            return userData.membership && userData.membership.id === plan.id ? (
              ""
            ) : (
              <Components.PlanCard plan={plan} key={plan.id} />
            );
          })}
        </PlansContainer>
      )}
    </Components.Background>
  );
}

const PlansContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default PlanChoice;
