// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/Menu";
import Portada from "./components/Portada";


function App() {

    return (
        <>
            <MyNav />
            <Portada />
            <section className='d-flex justify-content-around'>
                <Menu />
                <Menu />
                <Menu />
            </section>
            <Footer className="footer" />
        </>
    )
}

export default App