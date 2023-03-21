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
                            <button className="btn btn-outline-dark bg-primary" type="button" id="searchButton"><i className="bi bi-search"></i></button>
                        </span>
                    </div>
                    <div className="col-4"></div>
                </div>
            </nav>

            <div className="row align mx-auto">
                {/* <-- Lado --> */}
                <aside className="col-2 m-4">  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
                    <h2 className="text-center border-bottom border-top">Filtros</h2>
                    <div className="border rounded p-2">
                        <div class="list-group">
                            <h6 className="mx-2">Marca:</h6>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Marvel
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Harry Potter
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Juego de Tronos
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Star Wars
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Dragon Ball
                            </label>
                        </div>

                        <div class="list-group">
                            <h6 className="mx-2">Precio:</h6>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                Menor a 10€
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                10€ - 20€
                            </label>
                            <label class="list-group-item border-0">
                                <input class="form-check-input me-1" type="checkbox" value=""/>
                                20€ - 30€
                            </label>
                        </div>

                    </div>

                </aside>

                {/* <-- Seccion --> */}
                <section className="col-9 m-4">
                    <h2 className="text-center border-bottom border-top">Catálogo</h2>
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


