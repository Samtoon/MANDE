import { Button } from "reactstrap"
import React from 'react'
import { useRouter } from "next/router.js"

export default function NewAccount(props) {
  const router = useRouter()

  return <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}
  >
    <div style={{ padding: '10%' }}>
      <h1>Crear cuenta</h1>
    </div>
    <div style={{ padding: '1%' }}>
      <Button color='success'
        onClick={() => { router.push('/RegisterWorker') }}
      >
        Trabajador
      </Button>
    </div>
    <div style={{ padding: '1%' }}>
      <Button color='success'
        onClick={() => { router.push('/RegisterUser') }}
      >Usuario</Button>
    </div>
    <div style={{ padding: '1%' }}>
      <Button onClick={() => { router.push('/') }}>Regresar</Button>
    </div>
  </div>
}