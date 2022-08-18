import { useRouter } from 'next/router'
import { Button, Label } from 'reactstrap'

export async function getStaticProps(context) {
    const { pool } = require('/src/utils/database/index')
    const promise1 = await pool.query('SELECT nombre FROM servicio')
    const endresult = promise1.rows.map((row) => row.nombre)
    console.log(endresult)
    return {
        props: {
            endresult
        }
    }
}

function LaborButton(props) {
    return <Button color='info' outline='false'>
    {props.name}
</Button>
}

export default function Home({endresult}) {
    const labors = endresult
    const router = useRouter()
return <div className='d-flex flex-column'>
    <div className='d-flex justify-content-between'>
        <div class="p-2 bd-highlight">
            
        </div>
        <div class="p-2 bd-highlight">
        <h1>
            ¿Qué necesita?
        </h1>
        </div>
        <div class="d-flex flex-column" style={{width: '100px'}}>
        
            <Label> Nombre: Juan Camilo López Pérez de La Vega Sánchez de la Concepción</Label>
            <Button color='danger'
            onClick={() => router.push('/')}
            >Cerrar sesión</Button>
        </div>
    
        
    </div>
    <div className='d-flex flex-column'>
        {labors.map((labor)=>LaborButton({name: labor}))}
    </div>
</div>
}