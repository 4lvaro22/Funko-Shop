import { useState, useEffect } from 'react';

export const Search = ({ updateSearch }) => {
  const [form, toggleForm] = useState(false);
  const [search, setSearch] = useState('');
  const [buscado, setBuscado] = useState('');

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
    updateSearch(search);
  };

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
    </>
  );
};
