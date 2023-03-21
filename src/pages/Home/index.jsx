import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';
import { funko } from './../../components/funko';

export const Home = () => {
  const [form, toggleForm] = useState(false);
  const [search, setSearch] = useState('');

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
              <button className={'btn btn-outline-' + (form ? 'primary' : 'secondary')} type='button' id='button-addon2'><i className='bi bi-search' /></button>
            </span>
          </div>
          <div className='col-4' />
        </div>
      </nav>

      {/* <-- Lado --> */}
      <aside>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
        <h2>Filtros</h2>
      </aside>

      {/* <-- Seccion --> */}
      <section>
        <h2>Catálogo</h2>
        <funko />
      </section>
    </>
  );
};
export default Home;
