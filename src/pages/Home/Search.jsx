import { useState, useEffect } from 'react';
import { useCached } from '../../hooks/useCached';

export const Search = ({ updateSearch }) => {
  const [form, toggleForm] = useState(false);
  const [cachedSearch, setCachedSearch, search, updateFixedSearch] = useCached('');

  useEffect(() => {
    toggleForm(cachedSearch.length > 0);

    return () => {
      toggleForm(false);
    };
  }, [cachedSearch]);

  useEffect(() => {
    updateSearch(search);
  }, [search]);

  return (
    <>
      <nav aria-label='Buscador por texto' className='container-fluid'>
        <div className='d-flex d-flex-row justify-content-center'>
          <div className='col-auto'>
            <span className='input-group m-1 d-flex d-flex-row justify-content-center shadow'>
              <span className='input-group-text bg-secondary text-white'>
                <label htmlFor='buscador'>Buscador:</label>
              </span>
              <input
                type='search' className='form-control' id='buscador' aria-label='Buscar nombre de personaje por texto'
                value={cachedSearch}
                onChange={e => setCachedSearch(e.target.value)}
                onKeyUp={e => e.key === 'Enter' ? updateFixedSearch() : null}
              />
              <button aria-label='Botón de Buscar' className={'btn btn-outline-white' + ' bg-' + (form ? 'primary' : 'secondary')} type='button' id='button-addon2' onClick={updateFixedSearch}><i className='bi bi-search' style={{ color: '#FFFFFF' }} /></button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
