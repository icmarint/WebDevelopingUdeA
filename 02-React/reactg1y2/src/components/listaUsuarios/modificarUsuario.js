import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';

const ModificarUsuario = () => {

    const usuarioModificarJson = JSON.parse(localStorage.getItem("usuarioModificar"))
    let userModificado = false
    const [newUsuario, setNewUsuario] = useState(usuarioModificarJson)

    const modificarPassword = (passwordp) => {
      setNewUsuario({email:newUsuario.email,password:passwordp,nombre:newUsuario.nombre})
    }

    const modificarNombre = (nombrep) => {
      setNewUsuario({email:newUsuario.email,password:newUsuario.password,nombre:nombrep})
    }

    const modificarUsuario = (e) => {
        const datosUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        for(let i = 0; i < datosUsuarios.length; i++){
            if(datosUsuarios[i].email === newUsuario.email){
                datosUsuarios[i].nombre = newUsuario.nombre
                datosUsuarios[i].password = newUsuario.password
            }
        }
        localStorage.setItem("usuarios",JSON.stringify(datosUsuarios))
        localStorage.setItem("usuarioModificar",JSON.stringify(newUsuario))
        userModificado = true

        alert("Usuario Modificado")
        e.target.form.elements.emailnewinput.value=""
        e.target.form.elements.nombrenewinput.value=""
        e.target.form.elements.passwordnewinput.value=""
      }  

    return (
        <div>
            {
          userModificado ? <p>Usuario Modificado con Exito</p> :
            <Form onSubmit={
                (e)=>{
                    modificarUsuario(e)
                }
            }>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Password</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                        <td>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                            <Form.Control
                            id="emailnewinput"
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            defaultValue={newUsuario.email}
                            disabled
                            />
                        </InputGroup>
                        </td>
                        <td>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">Nombre</InputGroup.Text>
                            <Form.Control
                            id="nombrenewinput"
                            placeholder="Nombre"
                            aria-label="Nombre"
                            aria-describedby="basic-addon2"
                            defaultValue={newUsuario.nombre}
                            onChange={
                                (e)=>{modificarNombre(e.target.value)}
                            }
                            />
                        </InputGroup>
                        </td>
                        <td>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">Password</InputGroup.Text>
                            <Form.Control
                            id="passwordnewinput"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon3"
                            defaultValue={newUsuario.password}
                            onChange={
                                (e)=>{modificarPassword(e.target.value)}
                            }
                            />
                        </InputGroup>
                        </td>
                        <td><Button variant="primary" type="submit">
                        Modificar
                        </Button>
                        </td>                                  
                    </tr>
                </tbody>
            </Table>
            </Form>
            }
        </div>
    )
}

export default ModificarUsuario