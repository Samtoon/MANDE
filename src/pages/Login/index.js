import { useRouter } from 'next/router'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function Login(props) {
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
              <Button onClick={() => router.push('/')}>Regresar</Button>
            </div>
            <div style={{ padding: '10%' }}>
              <Button color='success'>Acceder</Button>
            </div>
          </div>
        </FormGroup>
      </Form>
    </div>

  </div>
}