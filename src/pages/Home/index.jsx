import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';



export const Home = () => {
    console.log('Home');

    console.log("Home");

    return (
        <>
            <nav className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <span className="input-group mb-2 d-flex justify-content-center">
                            <input id="buscador" type="text" className="form-control" aria-label="Buscador" aria-describedby="Buscar" />
                            <button className="btn btn-outline-dark bg-secondary" type="button" id="searchButton"><i className="bi bi-search"></i></button>
                        </span>
                    </div>
                    <div className="col-4"></div>
                </div>
            </nav>

            <div className="row align mx-auto">
                {/* <-- Lado --> */}
                <aside className="col-3 bg-info m-4">  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
                    <h2 className="text-center">Filtros</h2>
                </aside>

                {/* <-- Seccion --> */}
                <section className="col-8 bg-primary m-4">
                    <h2 className="text-center">Catálogo</h2>
                    <funko />
                </section>
            </div>
        </>
    );
};
export default Home;

{/*
const buscador = document.getElementById("buscador");

buscador.addEventListener("input", changeColor);

function changeColor() {
    document.getElementById("searchButton").className = "btn btn-outline-dark bg-primary";
};
*/}


