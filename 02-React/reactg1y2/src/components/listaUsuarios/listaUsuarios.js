import React, { useState } from 'react';
import styles from './listaUsuarios.module.css';
import datosUsuarioJson from "./datos.json"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListaUsuarios = () => 
  {
    const [datosUsuario, setDatosUsuario] = useState(datosUsuarioJson)

    return (
      <div>
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
        
          {
            datosUsuario.map(
              (usuario,index)=>{
                return(
                  <tr>
                    <td>{index}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.password}</td>
                    <td><Button variant="danger">Eliminar</Button></td>
                  </tr>
                );
              }
            )
          }

        </tbody>
      </Table>
      </div>
    )
  }
;


export default ListaUsuarios;
