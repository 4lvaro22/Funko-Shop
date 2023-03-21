import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';
import { getSeries } from './../../data';

const funko_prueba = {
  handle: 'rhaenyra-targaryen',
  title: 'Rhaenyra Targaryen',
  imageName: 'https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1324888/Rhaenyra_Targaryen_Vinyl_Art_Toys_4fb7ebdb-25d5-4aaa-9071-633c0513cdb2.png',
  series: [
    'Pop! Vinyl',
    'Pop! Digital'
  ],
  scale: '3.75',
  released: {
    month: 'Feb',
    year: '2023'
  },
  price: '85',
  rating: '3.00'
};

export const Home = () => {
  const [form, toggleForm] = useState(false);
  const [search, setSearch] = useState('');
  const items = [];

  getSeries()
    .forEach(item => items.push(
      <label class='list-group-item border-0'>
        <input class='form-check-input me-1' type='checkbox' value='' />
        {item}
      </label>
    ));

  console.log('Home');

  useEffect(() => {
    if (search.length > 0) {
      toggleForm(true);
    } else {
      toggleForm(false);
    }
  }, [search]);

  return (
    <>
      <nav className='container-fluid bg-dark'>
        <div className='row'>
          <div className='col-4' />
          <div className='col-4'>
            <span className='input-group mb-2 d-flex justify-content-center'>
              <input
                type='text' className='form-control' id='buscador' aria-label='Buscador' aria-describedby='Buscar'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className={'btn btn-outline-' + (form ? 'dark' : 'white') + ' bg-' + (form ? 'primary' : 'secondary')} type='button' id='button-addon2'><i className='bi bi-search' /></button>
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
            <div class='list-group'>
              <h6 className='mx-2'>Marca:</h6>
              {items}
            </div>

            <div class='list-group'>
              <h6 className='mx-2'>Precio:</h6>
              <label class='list-group-item border-0'>
                <input class='form-check-input me-1' type='checkbox' value='' />
                Menor a 10€
              </label>
              <label class='list-group-item border-0'>
                <input class='form-check-input me-1' type='checkbox' value='' />
                10€ - 20€
              </label>
              <label class='list-group-item border-0'>
                <input class='form-check-input me-1' type='checkbox' value='' />
                20€ - 30€
              </label>
            </div>

          </div>

        </aside>

        {/* <-- Seccion --> */}
        <section className='col-9 m-4'>
          <h2 className='text-center border-bottom border-top'>Catálogo</h2>
          <Funko />
        </section>
      </div>
    </>
  );
};
export default Home;
