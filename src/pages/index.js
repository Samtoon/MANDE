import '../styles/Home.module.css';
import { Button } from 'reactstrap';
import { useRouter } from 'next/router';



export default function Home(props) {
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
    <h1>Mande</h1>
    <h5>Servicios domésticos</h5>
    <div
    >
      <Button
        color='primary'
        outline='false'
        onClick={() => { router.push('/Login') }}
      >
        Iniciar sesión
      </Button>
      <Button
        color='success'
        onClick={() => { router.push('/NewAccount') }}
      >
        Registrarse
      </Button>
    </div>
  </div>
};
