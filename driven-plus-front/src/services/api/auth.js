import app from "./index";

async function signIn(body) {
  const response = await app.post("/auth/login", body);
  return response.data;
}

export { signIn };
