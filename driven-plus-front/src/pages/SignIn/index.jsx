import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as Components from "../../components/";
import * as authApi from "../../services/api/auth";
import useAuth from "../../hooks/Auth";

function SignIn() {
  const navigate = useNavigate();
  const { userData, login } = useAuth();
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (userData && userData.token) {
      navigate("/home");
    }
  }, []);

  async function handleSignIn(body) {
    setSubmitting(true);
    try {
      const data = await authApi.signIn(body);
      const userData = {
        id: data.id,
        token: data.token,
        name: data.name,
        membership: data.membership,
        email: data.email,
        cpf: data.cpf,
      };
      login(userData);
      if (!data.membership) {
        navigate("/subscriptions");
        return;
      }

      navigate("/home");
    } catch (e) {
      console.log(e);
      alert("Falha no Login");
    } finally {
      setSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => handleSignIn(values),
  });

  async function handleNavigate() {
    navigate("/sign-up");
  }
  return (
    <Components.Background>
      <Components.TitleCard />
      <Components.FormContainer
        formik={formik}
        buttonText={"Entrar"}
        redirectButton={"Não possui uma conta? Cadastre-se"}
        navigate={handleNavigate}
        isSubmitting={isSubmitting}
      >
        <Components.FormInput
          name={"email"}
          type={"email"}
          placeholder={"E-mail"}
          handleChange={formik.handleChange}
          value={formik.values.email}
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

export default SignIn;
