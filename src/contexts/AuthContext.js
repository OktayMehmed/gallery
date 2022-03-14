import { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvidev = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    const localName = localStorage.getItem("username");
    return localName ? JSON.parse(localName) : ""
  });

  const setName = (name) => {
    localStorage.setItem("username", JSON.stringify(name))
    setUserName(name)
  }
  return (
    <AuthContext.Provider value={{ userName, setName }}>
      {children}
    </AuthContext.Provider>
  )
}

