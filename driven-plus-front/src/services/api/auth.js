import app from "./index";

async function signIn(body) {
  const response = await app.post("/auth/login", body);
  return response.data;
}

async function signUp(body) {
  const response = await app.post("/auth/sign-up", body);
  return response.data;
}

export { signIn, signUp };
