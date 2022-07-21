import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as Components from "../../components/";
import * as authApi from "../../services/api/auth";
import useAuth from "../../hooks/Auth";

function SignUp() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (auth && auth.email) {
      navigate("/home");
    }
  }, []);

  async function handleSignUp(body) {
    setSubmitting(true);
    try {
      await authApi.signUp(body);
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Não foi possível realizar o cadastro");
    } finally {
      setSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cpf: "",
      password: "",
    },
    onSubmit: (values) => handleSignUp(values),
  });

  async function handleNavigate() {
    navigate("/");
  }
  return (
    <Components.Background>
      <Components.FormContainer
        formik={formik}
        buttonText={"Cadastrar"}
        redirectButton={"Já possui uma conta? Entre"}
        navigate={handleNavigate}
        isSubmitting={isSubmitting}
      >
        <Components.FormInput
          name={"name"}
          type={"text"}
          placeholder={"Nome"}
          handleChange={formik.handleChange}
          value={formik.values.name}
          disabled={isSubmitting}
        />
        <Components.FormInput
          name={"email"}
          type={"email"}
          placeholder={"E-mail"}
          handleChange={formik.handleChange}
          value={formik.values.email}
          disabled={isSubmitting}
        />
        <Components.FormInput
          name={"cpf"}
          type={"text"}
          placeholder={"CPF"}
          handleChange={formik.handleChange}
          value={formik.values.cpf}
          disabled={isSubmitting}
        />
        <Components.FormInput
          name={"password"}
          type={"password"}
          placeholder={"Senha"}
          handleChange={formik.handleChange}
          value={formik.values.password}
          disabled={isSubmitting}
        />
      </Components.FormContainer>
    </Components.Background>
  );
}

export default SignUp;
