import styled from "styled-components";
import ReactModal from "react-modal";
import { useNavigate } from "react-router";

import * as planApi from "../../services/api/plan";
import useAuth from "../../hooks/Auth";

function SubscriptionModal({ isOpen, setIsOpen, plan, values }) {
  ReactModal.setAppElement("#root");

  const { userData, addPlan } = useAuth();
  const navigate = useNavigate();

  const resetModal = {
    overlay: { backgroundColor: "rgba(0,0,0,0.7)" },
    content: {
      opacity: 1,
      backgroundColor: "transparent",
      border: "none",
    },
  };

  function handleModalClose() {
    setIsOpen(false);
  }

  async function planSubscribe() {
    handleModalClose();

    const serverData = {
      membershipId: values.id,
      cardName: values.name,
      cardNumber: values.digits,
      securityNumber: values.securityCode,
      expirationDate: values.expireDate,
    };

    try {
      const data = await planApi.planSubscribe(serverData, userData.token);
      console.log(data);
      addPlan(data.membership);
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ReactModal isOpen={isOpen} style={resetModal}>
      <CloseButton onClick={handleModalClose}>
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.375 0.75H2.625C1.17578 0.75 0 1.92578 0 3.375V22.625C0 24.0742 1.17578 25.25 2.625 25.25H25.375C26.8242 25.25 28 24.0742 28 22.625V3.375C28 1.92578 26.8242 0.75 25.375 0.75ZM20.8031 16.6367C21.0656 16.8992 21.0656 17.3258 20.8031 17.5883L18.5883 19.8031C18.3258 20.0656 17.8992 20.0656 17.6367 19.8031L14 16.1336L10.3633 19.8031C10.1008 20.0656 9.67422 20.0656 9.41172 19.8031L7.19688 17.5883C6.93438 17.3258 6.93438 16.8992 7.19688 16.6367L10.8664 13L7.19688 9.36328C6.93438 9.10078 6.93438 8.67422 7.19688 8.41172L9.41172 6.19688C9.67422 5.93438 10.1008 5.93438 10.3633 6.19688L14 9.86641L17.6367 6.19688C17.8992 5.93438 18.3258 5.93438 18.5883 6.19688L20.8031 8.41172C21.0656 8.67422 21.0656 9.10078 20.8031 9.36328L17.1336 13L20.8031 16.6367Z"
            fill="white"
          />
        </svg>
      </CloseButton>
      <ModalBox>
        <StyledText>
          Tem certeza que deseja assinar o plano {plan.name} (R${" "}
          {plan.price.replace(".", ",")})?
        </StyledText>
        <ButtonGroup>
          <StyledButton onClick={handleModalClose}>Não</StyledButton>
          <StyledButton onClick={planSubscribe} bgColor={"pink"}>
            SIM
          </StyledButton>
        </ButtonGroup>
      </ModalBox>
    </ReactModal>
  );
}

const CloseButton = styled.div`
  width: 28px;
  height: 24.5px;

  position: absolute;
  top: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 248px;
  height: 210px;

  background-color: ${(props) => props.theme.misc.white};
  border-radius: 12px;
  padding: 22px;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
const StyledText = styled.div`
  margin-top: 11px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 45px;
`;

const StyledButton = styled.button`
  width: 45%;
  height: 52px;

  background: ${(props) =>
    props.bgColor === "pink" ? props.theme.button.main : "#cecece"};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.misc.white};

  font-family: "Roboto";
`;
export default SubscriptionModal;
