import styled from "styled-components";

function FormContainer({
  children,
  formik,
  buttonText,
  redirectButton = "",
  navigate = () => {},
  isSubmitting,
}) {
  return (
    <Form onSubmit={formik.handleSubmit}>
      {children}
      <SubmitButton type="submit" disabled={isSubmitting}>
        {buttonText}
      </SubmitButton>
      {redirectButton !== "" && (
        <RedirectButton
          type="button"
          onClick={navigate}
          disabled={isSubmitting}
        >
          {redirectButton}
        </RedirectButton>
      )}
    </Form>
  );
}

const Form = styled.form`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 52px;

  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme.button.main};

  color: ${(props) => props.theme.misc.white};
  font-family: ${(props) => props.theme.font.typography};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

const RedirectButton = styled.button`
  width: 100%;

  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.misc.white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
`;

export default FormContainer;
