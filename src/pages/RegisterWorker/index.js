import { FormGroup, Label, Input, Button } from 'reactstrap'
import React, { useState } from 'react';
import { useRouter } from "next/router.js"

function NewLabor(props) {
  
  return <div className="container" >
    <div className="row">
      <div className="col">
        <Label>
          Oficio
        </Label>
        <Input id='labor' type='select'>
          
          {props.labors.map(labor => 
            <option>
              {labor}
            </option>
          )}
        </Input>
      </div>
      <div className="col">
        <Label>
          Costo unitario
        </Label>
        <Input id='cost' />
      </div>
    </div>
    <div className="row">
      <div className="d-flex justify-content-center align-items-center">
        <Label>
          Unidad de trabajo
        </Label>
        <div className="p-2 bd-highlight" style={{ width: '150px' }}>
          <Input id='unity' />
        </div>
      </div>
    </div>
  </div>
}

export async function getStaticProps(){
  const {pool} = require('/src/utils/database/index')
  const promise = await pool.query('SELECT nombre FROM servicio')
  const endresult = promise.rows.map((row)=>row.nombre)
  console.log(endresult)
  return {
    props:{
      endresult
    }
  }
}

export default function RegisterWorker({endresult}) {
  const router = useRouter()
  const [laborArray, setLaborArray] = useState(1);
  console.log("endresult es de tipo "+typeof endresult+" y tiene el valor: "+endresult)
  //const availableLabors = endresult
  const availableLabors = endresult
  return <div className="container">
    <div className="row">
      <div className="col">
        <div className="row" style={{ padding: '10px' }}>
          <div className="container" style={{ color: '#fff', width: '150px', height: '150px', backgroundColor: 'blue' }}>
            Primera imagen
            <Input type='file' style={{ fontSize: '75%' }} />
          </div>
        </div>
        <div className="row" style={{ padding: '10px' }}>
          <div className="container" style={{ color: '#fff', width: '150px', height: '150px', backgroundColor: 'green' }}>
            Segunda imagen
            <Input type='file' style={{ fontSize: '75%' }} />
          </div>
        </div>
        <div className="row" style={{ padding: '10px' }}>
          <div className="container" style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}>
            Mapa
          </div>
        </div>
      </div>
      <div className="col">
        <FormGroup>
          <Label>
            Nombre
          </Label>
          <Input id='name' />
          <Label>
            Direcci??n
          </Label>
          <Input id='address' />
          <Label>
            C??dula
          </Label>
          <Input id='ID' />
          <Label>
            Celular
          </Label>
          <Input id='cellphone' />
          <Label>
            Correo
          </Label>
          <Input id='cellphone' type='email' />
          <Label>
            G??nero
          </Label>
          <Input id='gender' type='select'>
            <option>
              Masculino
            </option>
            <option>
              Femenino
            </option>
            <option>
              Otro
            </option>
            <option>
              Prefiero no decirlo
            </option>
          </Input>
          <Label>
            Contrase??a
          </Label>
          <Input id='password' type='password' />
          <Label>
            Confirmar contrase??a
          </Label>
          <Input id='confirmPassword' type='password' />
        </FormGroup>
      </div>
    </div>
    <div className='row' style={{ padding: '10px' }}>
      <div className='container' id='laborContainer'>
        {
          new Array(laborArray).fill(<></>, 0, laborArray).map(singleLabor => NewLabor({labors: availableLabors}))
        }
      </div>
    </div>
    <div className='row' style={{ padding: '10px' }}>
      <div className='d-flex justify-content-center'>
        <Button outline='false'
          color='info'
          onClick={() => (
            setLaborArray(laborArray + 1)
          )}
        >A??adir oficio, hay {laborArray}</Button>
      </div>
    </div>
    <div className='row'>
      <div className='d-flex justify-content-around'>
        <Button onClick={() => router.push('/NewAccount')} >Regresar</Button>
        <Button color='success'>Registrar</Button>
      </div>
    </div>
  </div >
}