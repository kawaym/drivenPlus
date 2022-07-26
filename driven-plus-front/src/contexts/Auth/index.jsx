import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedData = JSON.parse(localStorage.getItem("auth"));
  const [userData, setUserData] = useState(persistedData);

  function login(userData) {
    setUserData(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  }

  function addPlan(membership) {
    const userData = JSON.parse(localStorage.getItem("auth"));
    userData.membership = membership;
    setUserData(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  }

  function removePlan() {
    const userData = JSON.parse(localStorage.getItem("auth"));
    userData.membership = null;
    setUserData(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  }

  return (
    <AuthContext.Provider value={{ userData, login, removePlan, addPlan }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
