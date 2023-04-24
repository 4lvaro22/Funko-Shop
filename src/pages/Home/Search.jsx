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
      <nav className='container-fluid'>
        <div className='row'>
          <div className='col-4' />
          <div className='col-4'>
            <span className='input-group m-1 d-flex justify-content-center'>
              <input
                type='text' className='form-control' id='buscador' aria-label='Buscador' aria-describedby='Buscar'
                value={cachedSearch}
                onChange={e => setCachedSearch(e.target.value)}
                onKeyUp={e => e.key === 'Enter' ? updateFixedSearch() : null}
              />
              <button className={'btn btn-outline-' + (form ? 'dark' : 'white') + ' bg-' + (form ? 'primary' : 'secondary')} type='button' id='button-addon2' onClick={updateFixedSearch}><i className='bi bi-search' /></button>
            </span>
          </div>
          <div className='col-4' />
        </div>
      </nav>
    </>
  );
};
