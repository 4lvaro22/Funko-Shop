import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { Funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';
import { getSeries, getFunkos } from './../../data';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Home = ({ itemsPerPage }) => {
  const [form, toggleForm] = useState(false);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [buscado, setBuscado] = useState('');
  const [funkoList, setFunkoList] = useState(getFunkos().map(item => <Funko key={item.handle} funko={item} />));
  const items = [];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = funkoList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(funkoList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % funkoList.length;
    console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  getSeries()
    .forEach(item => items.push(
      <label className='list-group-item border-0'>
        <input className='form-check-input me-1' type='checkbox' value={item} name='serie' />
        {item.normalize().replace('Pop! ', '').replace('Pops! ', '').replace('POP! ', '')}
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
    setBuscado(search);
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
              <div className='overflow-auto' style={{ maxHeight: '500px' }}>
                {items}
              </div>
            </div>

            <div className='list-group my-2'>
              <h6 className='mx-2'>Precio:</h6>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='menorVein' />
                Menor a 20€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='veinCincuen' />
                20€ - 50€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='mayorCincuen' />
                Mayor a 50
              </label>
            </div>

            <div className='list-group'>
              <input className='float-end btn btn-primary' type='submit' value='Aplicar Filtros' />
            </div>
          </div>

        </aside>

        {/* <-- Seccion --> */}
        <section className='col-9 m-4'>
          <h2 className='text-center border-bottom border-top'>Catálogo</h2>
          {buscado && <p className='fs-5 fw-bold text-left'>Resultados de '{buscado}'</p>}
          {currentItems && currentItems.map((funko) => (
            <div className='d-inline-flex'>
              {funko}
            </div>
          ))}

          {funkoList.length == 0 &&
            <div>
              <h4 className='text-center mt-4'>
                No hay resultados para esa busqueda.
              </h4>
            </div>}

          {funkoList.length > 0 &&
            <div className='row'>
              <div className='px-2 col-10'>
                <ReactPaginate
                  previousLabel='Previous'
                  nextLabel='Next'
                  breakLabel='...'
                  break1='page-item'
                  breakLinkClassName='page-link'
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName='pagination  d-flex justify-content-center my-2 p-3'
                  previousLinkClassName='pagination__link mx-3 btn btn-primary'
                  nextLinkClassName='pagination__link mx-3 btn btn-primary'
                  disabledClassName='pagination__link--disabled'
                  activeClassName='pagination__link--active'
                  pageClassName='page-item'
                  pageLinkClassName='page-link text-dark'
                  previousClassName='page-item'
                  nextClassName='page-item'
                  activeLinkClassName='disabled bg-secondary'
              // eslint-disable-next-line no-unused-vars
                  hrefAllControls
                  onClick={(clickEvent) => {
                    console.log('onClick', clickEvent);
                    // Return false to prevent standard page change,
                    // return false; // --> Will do nothing.
                    // return a number to choose the next page,
                    // return 4; --> Will go to page 5 (index 4)
                    // return nothing (undefined) to let standard behavior take place.
                  }}
                />
              </div>
              <div className='col-4 mx-2' />
            </div>}

        </section>
      </div>
    </>
  );
};

export default Home;
