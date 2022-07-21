import axios from "axios";

const app = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function createConfig(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return config;
}

export default app;
