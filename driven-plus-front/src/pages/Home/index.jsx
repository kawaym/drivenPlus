import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as Components from "../../components";
import useAuth from "../../hooks/Auth";
import * as planApi from "../../services/api/plan";

function Home() {
  const { userData, removePlan } = useAuth();
  const navigate = useNavigate();

  async function planUnsubscribe() {
    try {
      const data = await planApi.planUnsubscribe(userData.token);
      console.log(data);
      removePlan();
      navigate("/subscriptions");
    } catch (e) {
      console.log(e);
      alert("Erro ao cancelar a inscrição");
    }
  }

  console.log(userData);

  return (
    <Components.Background>
      <Components.Header>
        <Components.PlanLogo src={userData.membership.image} />
        <IconContext.Provider value={{ size: "2.3em", color: "white" }}>
          <FaUserCircle />
        </IconContext.Provider>
      </Components.Header>
      <PageContainer>
        <Components.PageTitle>
          Olá, {userData.name.split(" ")[0]}
        </Components.PageTitle>

        <PerkContainer>
          {userData.membership.perks.map((perk) => {
            return (
              <a
                href={perk.link}
                key={perk.id}
                style={{ width: "100%" }}
                target="_blank"
                rel="noreferrer"
              >
                <Components.MainButton type="button">
                  {perk.title}
                </Components.MainButton>
              </a>
            );
          })}
        </PerkContainer>

        <OptionsContainer>
          <Link to="/subscriptions" style={{ width: "100%" }}>
            <Components.MainButton>Mudar Plano</Components.MainButton>
          </Link>
          <Components.MainButton style="#FF4747" onClick={planUnsubscribe}>
            Cancelar Plano
          </Components.MainButton>
        </OptionsContainer>
      </PageContainer>
    </Components.Background>
  );
}

const PageContainer = styled.main`
  width: 80%;
  height: 100%;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
`;

const PerkContainer = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: start;

  gap: 5px;
`;

const OptionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end;

  gap: 5px;
  margin-bottom: 35px;
`;

export default Home;
