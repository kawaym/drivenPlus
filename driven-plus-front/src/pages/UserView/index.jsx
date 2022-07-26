import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { IconContext } from "react-icons";

import * as Components from "../../components";
import useAuth from "../../hooks/Auth";

function UserView() {
  const { userData, logoff } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logoff();
    navigate("/");
  }

  return (
    <Components.Background>
      <Components.Header>
        <Components.BackButton path={"/home"} />
        <IconContext.Provider value={{ size: "2.3em", color: "white" }}>
          <TbLogout onClick={handleLogout} />
        </IconContext.Provider>
      </Components.Header>
      <InfoContainer>
        <Components.FormInput disabled={true} value={userData.name} />
        <Components.FormInput disabled={true} value={userData.cpf} />
        <Components.FormInput disabled={true} value={userData.email} />
        <Link to={`/users/${userData.membership.id}/update`}>
          <Components.MainButton>Atualizar</Components.MainButton>
        </Link>
      </InfoContainer>
    </Components.Background>
  );
}

const InfoContainer = styled.main`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default UserView;
