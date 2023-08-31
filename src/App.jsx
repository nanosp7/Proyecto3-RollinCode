import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import './App.css';
import Cartas from "./components/Cartas";
import Portada from "./components/Portada";
import TarjetasInfo from "./components/TarjetasInfo";
import MyNav from "./components/MyNav";
import Axios from "axios";


const rutaUsuarios = import.meta.env.VITE_ENV_USERS;

function App() {
    const [users, setUsers] = useState([])
    const backEnd = async () => {
        try {
            const result = await Axios.get(rutaUsuarios + '/getUsers');
            setUsers(result.data.usuarios);
        } catch (err) {
            return
        }
    }
    return (
        <>
            <MyNav />
            <Portada
                users = {users}
                titulo={'Titulo'}
                descripccion={'soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />
        </>
    )
}

export default App