import React, { useState } from 'react';
import { useRouter } from "next/router.js"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function RegisterUser() {
    const router = useRouter()
    return <div className="container">
        <div className='row'>
            <div className='col'>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="container" style={{ color: '#fff', width: '150px', height: '150px', backgroundColor: 'blue' }}>
                        Primera imagen
                        <Input type='file' style={{ fontSize: '75%' }} />
                    </div>
                </div>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="container" style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}>
                        Mapa
                    </div>
                </div>
            </div>
            <div className='col'>
                <FormGroup>
                    <Label>
                        Nombres
                    </Label>
                    <Input id='names' />
                    <Label>
                        Apellidos
                    </Label>
                    <Input id='lastnames' />
                    <Label>
                        Dirección
                    </Label>
                    <Input id='address' />
                    <Label>
                        Cédula
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
                        Contraseña
                    </Label>
                    <Input id='password' type='password' />
                    <Label>
                        Confirmar contraseña
                    </Label>
                    <Input id='confirmPassword' type='password' />
                </FormGroup>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <legend>
                Medio de pago
            </legend>
        </div>
        <div className='row'>
            <div className='col'>
                <FormGroup>
                    <Label>
                        Tipo tarjeta
                    </Label>
                    <FormGroup check>
                        <Input id='creditType' type='radio' name='cardType' />
                        {' '}
                        <Label check for='creditType'>
                            Crédito
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input id='debitType' type='radio' name='cardType' />
                        {' '}
                        <Label check for='debitType'>
                            Débito
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>
            <div className='col'>
                <div className='row'>
                    <div className='col'>
                        <Label>
                            Número
                        </Label>
                    </div>
                    <div className='col'>
                        <Input id='cardNumber' />
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <Label>
                            Fecha de vencimiento
                        </Label>
                    </div>
                    <div className='col'>
                        <Input id='expirationDate' type='datetime' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Label>
                            Código de seguridad
                        </Label>
                    </div>
                    <div className='col'>
                        <Input id='securityCode' type='password' />
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='d-flex justify-content-around'>
                <Button onClick={() => router.push('/NewAccount')} >Regresar</Button>
                <Button color='success'>Registrar</Button>
            </div>
        </div>
    </div>
}