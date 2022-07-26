import app, { createConfig } from "./index";

async function updateUser(body, token) {
  const config = createConfig(token);

  const response = await app.put("/users", body, config);
  return response.data;
}

export { updateUser };
