import app, { createConfig } from "./index";

async function listPlans(token) {
  const config = createConfig(token);

  const response = await app.get("/subscriptions/memberships", config);
  return response.data;
}

async function listPlanInfo(id, token) {
  const config = createConfig(token);

  const response = await app.get(`/subscriptions/memberships/${id}`, config);
  return response.data;
}

async function planSubscribe(body, token) {
  const config = createConfig(token);

  const response = await app.post(`/subscriptions`, body, config);
  return response.data;
}

async function planUnsubscribe(token) {
  const config = createConfig(token);

  const response = await app.delete(`/subscriptions`, config);
  return response.data;
}

export { listPlans, listPlanInfo, planSubscribe, planUnsubscribe };
