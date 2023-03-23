import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { Funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';
import { getSeries, getFunkos } from './../../data';

export const Home = () => {
  const [form, toggleForm] = useState(false);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [funkoList, setFunkoList] = useState(getFunkos().map(item => <Funko key={item.handle} funko={item} />));
  const items = [];

  getSeries()
    .forEach(item => items.push(
      <label className='list-group-item border-0'>
        <input className='form-check-input me-1' type='checkbox' value='' />
        {item}
      </label>
    ));

  useEffect(() => {
    if (search.length > 0) {
      toggleForm(true);
    } else {
      toggleForm(false);
    }
  }, [search]);

  const handleBusqueda = () => {
    console.log('Buscando: ' + search);
    // setFilter(true);
    setFunkoList(getFunkos().filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map(element => <Funko key={element.handle} funko={element} />));
  };

  // useEffect(() => {
  //   // getFunkos().forEach(item => listaComponentesFunko.push(
  //   //   <Funko funko={item} />
  //   // ));
  //   console.log(funkoList);
  //   console.log('asd');
  //   if (filter) { setFilter(false); }
  // }, [funkoList]);

  return (
    <>
      <nav className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-4' />
          <div className='col-4'>
            <span className='input-group mb-2 d-flex justify-content-center'>
              <input
                type='text' className='form-control' id='buscador' aria-label='Buscador' aria-describedby='Buscar'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={e => e.key === 'Enter' ? handleBusqueda() : null}
              />
              <button className={'btn btn-outline-' + (form ? 'dark' : 'white') + ' bg-' + (form ? 'primary' : 'secondary')} type='button' id='button-addon2' onClick={() => handleBusqueda()}><i className='bi bi-search' /></button>
            </span>
          </div>
          <div className='col-4' />
        </div>
      </nav>

      <div className='row align mx-auto'>
        {/* <-- Lado --> */}
        <aside className='col-2 m-4'>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
          <h2 className='text-center border-bottom border-top'>Filtros</h2>
          <div className='border rounded p-2'>
            <div className='list-group'>
              <h6 className='mx-2'>Marca:</h6>
              <div className='overflow-auto' style={{ 'max-height': '300px' }}>
                {items}
              </div>
            </div>

            <div className='list-group my-2'>
              <h6 className='mx-2'>Precio:</h6>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' value='' />
                Menor a 10€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' value='' />
                10€ - 20€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' value='' />
                20€ - 30€
              </label>
            </div>

            <div className='list-group'>
              <button className='float-end btn btn-primary'>Aplicar filtros</button>
            </div>
          </div>

        </aside>

        {/* <-- Seccion --> */}
        <section className='col-9 m-4'>
          <h2 className='text-center border-bottom border-top'>Catálogo</h2>

          <div className='row flex d-inline'>
            {funkoList}
          </div>

        </section>
      </div>
    </>
  );
};
export default Home;
