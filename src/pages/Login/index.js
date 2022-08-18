import { useRouter } from 'next/router'
import { handleClientScriptLoad } from 'next/script';
import { useCallback, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

import useUser from '/src/hooks/useUser'

export default function Login(props) {
  const router = useRouter()

  const { isLogged, login } = useUser()

  const handleClick = useCallback((usuario, contrasena) => {
    login(usuario, contrasena)
  }, [login])

  useState(() => {
    if (isLogged)
      router.push('/') // Enviar a la página principal del usuario
  }, [isLogged, router])

  return <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}
  >
    <h1>
      Iniciar sesión
    </h1>
    <div>
      <Form>
        <FormGroup>
          <Label for='identification'>
            Identificación (Celular si es Usuario o Cédula si es Trabajador)
          </Label>
          <Input
            id='identification'
            name='identificationTxt'
          />
          <Label for='password'>
            Contraseña
          </Label>
          <Input
            id='password'
            name='passwordTxt'
            type='password'
          />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          >
            <div style={{ padding: '10%' }}>
              <Button onClick={(evt) => { evt.preventDefault(); router.push('/') }}>Regresar</Button>
            </div>
            <div style={{ padding: '10%' }}>
              <Button color='success'
                onClick={evt => { evt.preventDefault(); handleClick(/*usuario, contraseña*/) }}
              >Acceder</Button>
            </div>
          </div>
        </FormGroup>
      </Form>
    </div>

  </div >
}