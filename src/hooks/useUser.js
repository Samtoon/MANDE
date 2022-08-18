import { useCallback, useContext } from 'react'

import Context from '/src/context/userContext'

export default function useUser() {
  const { jwt, setJWT, userInfo, setUserInfo } = useContext(Context)

  const login = useCallback((usuario, contrasena) => {
    const URL = '/api/Login'
    const data = {
      usuario: usuario,
      contrasena: contrasena
    }

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(({ estado, userType }) => {
        switch (estado) {
          case 200:
            setUserInfo({ tipoUsuario: userType })
            setJWT('Logueado.')
            break
          case 404:
            console.log('Usuario incorrecto.')
            break
          case 400:
            console.log('Contraseña incorrecta.')
            break
          default:
            console.log('Error.')
            break
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT, setUserInfo])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    userInfo
  }
}