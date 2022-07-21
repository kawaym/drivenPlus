import app, { createConfig } from "./index";

async function listPlans(token) {
  const config = createConfig(token);

  const response = await app.get("/subscriptions/memberships", config);
  return response.data;
}

export { listPlans };
