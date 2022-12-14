import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ListaUsuarios from './components/listaUsuarios/listaUsuarios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Fragment } from 'react';
import Autorizacion from './Autorizacion';
import datosUsuarioJson from "./components/listaUsuarios/datos.json"
import AddUsuario from './components/listaUsuarios/addUsuario';
import Button from 'react-bootstrap/Button';
import ModificarUsuario from './components/listaUsuarios/modificarUsuario';

function App() {
  
  if(localStorage.getItem("usuarios")==null){
    localStorage.setItem("usuarios",JSON.stringify(datosUsuarioJson))
  }
  
  return (
    <>
    <BrowserRouter>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/ver">ver</Navbar.Brand>
          <Navbar.Brand href="/add">add</Navbar.Brand>
        </Container>
      </Navbar> */}

      <Button variant="danger" onClick={
                      ()=>{
                        window.location.href="/ver"
                      }
                    }>Ver
      </Button>
      <Button variant="primary" onClick={
                      ()=>{
                        window.location.href="/add"
                      }
                    }>Add
      </Button>
      <Button variant="warning" onClick={
                      ()=>{
                        window.location.href="/modificar"
                      }
                    }>Modificar
      </Button>

      <Routes>
        <Route path='/ver' element={Autorizacion(ListaUsuarios,["USER","ADMIN"])}/>
        <Route path='/add' element={Autorizacion(AddUsuario,["USER","ADMIN"])}/>
        <Route path='/modificar' element={Autorizacion(ModificarUsuario,["USER","ADMIN"])}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
