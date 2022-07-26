import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

import * as Components from "../../components";
import useAuth from "../../hooks/Auth";
import * as userApi from "../../services/api/user";

function UserUpdate() {
  const { userData } = useAuth();
  const [isSubmitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleUserUpdate(values) {
    setSubmitting(true);
    try {
      const data = await userApi.updateUser(values, userData.token);
      console.log(data);
      navigate(`/users/${userData.id}`);
    } catch (e) {
      console.log(e);
      alert("Não foi possível alterar seu usuário");
    } finally {
      setSubmitting(false);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: userData.name,
      cpf: userData.cpf,
      email: userData.email,
      currentPassword: "",
      newPassword: "",
    },
    onSubmit: (values) => handleUserUpdate(values),
  });

  return (
    <Components.Background>
      <Components.Header>
        <Components.BackButton path={`/users/${userData.id}`} />
      </Components.Header>
      <Components.FormContainer
        formik={formik}
        buttonText={"Salvar"}
        isSubmitting={isSubmitting}
      >
        <Components.FormInput
          name={"name"}
          type={"text"}
          placeholder={"Nome"}
          handleChange={formik.handleChange}
          value={formik.values.name}
          disabled={isSubmitting}
        ></Components.FormInput>
        <Components.FormInput
          name={"cpf"}
          type={"text"}
          placeholder={"CPF"}
          handleChange={formik.handleChange}
          value={formik.values.cpf}
          disabled={true}
        ></Components.FormInput>
        <Components.FormInput
          name={"email"}
          type={"email"}
          placeholder={"E-mail"}
          handleChange={formik.handleChange}
          value={formik.values.email}
          disabled={isSubmitting}
        ></Components.FormInput>
        <Components.FormInput
          name={"currentPassword"}
          type={"password"}
          placeholder={"Senha Atual"}
          handleChange={formik.handleChange}
          value={formik.values.currentPassword}
          disabled={isSubmitting}
        ></Components.FormInput>
        <Components.FormInput
          name={"newPassword"}
          type={"password"}
          placeholder={"Nova Senha"}
          handleChange={formik.handleChange}
          value={formik.values.newPassword}
          disabled={isSubmitting}
        ></Components.FormInput>
      </Components.FormContainer>
    </Components.Background>
  );
}

export default UserUpdate;
