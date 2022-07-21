import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
  const persistedData = JSON.parse(localStorage.getItem('auth'));
  const [userData, setUserData] = useState(persistedData);

  function login(userData){
    setUserData(userData);
    localStorage.setItem('auth', JSON.stringify(userData));
  }

  return (
    <AuthContext.Provider value={{ userData, login}}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext;