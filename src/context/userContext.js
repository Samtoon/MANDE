import React, { useState } from 'react'

const Context = React.createContext()

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  return (
    <Context.Provider value={{ jwt, setJWT, userInfo, setUserInfo }}>
      {children}
    </Context.Provider>
  );
}

export default Context