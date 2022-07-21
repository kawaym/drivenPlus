import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbClipboardList } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";

import * as Components from "../../components";
import * as planApi from "../../services/api/plan";
import useAuth from "../../hooks/Auth";

function PlanSubscription() {
  const { id } = useParams();
  const [isSubmitting, setSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [plan, setPlan] = useState({});
  const { userData } = useAuth();

  useEffect(() => {
    getPlanInfo();
  }, []);

  async function getPlanInfo() {
    try {
      const data = await planApi.listPlanInfo(id, userData.token);
      setPlan(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      alert("Falha ao encontrar dados do plano");
    }
  }

  async function handlePlanSubscribe(body) {
    console.log(body);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      digits: "",
      securityCode: "",
      expireDate: "",
    },
    onSubmit: (values) => handlePlanSubscribe(values),
  });

  return (
    <Components.Background>
      <Components.Header>
        <Components.BackButton path={"/subscriptions"} />
      </Components.Header>
      <Components.PlanLogo src={plan.image} size={"big"} />

      <Components.PageTitle>{plan.name}</Components.PageTitle>
      {!isLoading && (
        <InfoContainer>
          <ListTitle>
            <IconContext.Provider
              value={{
                color: "#FF4791",
                size: "1.5em",
              }}
            >
              <TbClipboardList /> <span>Benefícios:</span>
            </IconContext.Provider>
          </ListTitle>
          <PerkList>
            {plan.perks.map((perk) => {
              return <li key={perk.id}>{perk.title}</li>;
            })}
          </PerkList>
          <ListTitle>
            <IconContext.Provider
              value={{
                color: "#FF4791",
                size: "1.5em",
              }}
            >
              <FaMoneyBillWave /> <span>Preço:</span>
            </IconContext.Provider>
          </ListTitle>
          <PriceContainer>
            R$ {plan.price.replace(".", ",")} cobrados mensalmente
          </PriceContainer>
        </InfoContainer>
      )}
      <Components.FormContainer
        formik={formik}
        buttonText={"Assinar"}
        isSubmitting={isSubmitting}
      >
        <Components.FormInput
          name={"name"}
          type={"text"}
          placeholder={"Nome impresso no cartão"}
          handleChange={formik.handleChange}
          value={formik.values.name}
          disabled={isSubmitting}
        />
        <Components.FormInput
          name={"digits"}
          type={"text"}
          placeholder={"Digitos do cartão"}
          handleChange={formik.handleChange}
          value={formik.values.digits}
          disabled={isSubmitting}
        />
        <Components.FormInput
          name={"securityCode"}
          type={"text"}
          placeholder={"Código de Segurança"}
          handleChange={formik.handleChange}
          value={formik.values.securityCode}
          disabled={isSubmitting}
          size="half"
          align="start"
        />
        <Components.FormInput
          name={"expireDate"}
          type={"text"}
          placeholder={"Validade"}
          handleChange={formik.handleChange}
          value={formik.values.expireDate}
          disabled={isSubmitting}
          size="half"
          align="end"
        />
      </Components.FormContainer>
    </Components.Background>
  );
}

const InfoContainer = styled.main`
  width: 80%;

  margin-bottom: 30px;
`;

const ListTitle = styled.h1`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;

  gap: 7px;
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${(props) => props.theme.misc.white};
  }
`;

const PerkList = styled.ol`
  width: 80%;
  list-style-type: decimal;
  list-style-position: inside;

  padding: 10px 0px;

  li:not(:last-child) {
    margin-bottom: 3px;
  }

  li {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: ${(props) => props.theme.misc.white};
  }
`;

const PriceContainer = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: ${(props) => props.theme.misc.white};
`;

export default PlanSubscription;
