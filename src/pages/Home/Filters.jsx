import { useState } from 'react';
import { getSeries } from '../../data';
export const Filters = ({ setPrices, setSeries }) => {
  const [cachedPrices, setCachedPrices] = useState('');
  const [cachedSeries, setCachedSeries] = useState([]);

  const handleCheckSeries = () => {
    const copySeries = [];
    $('input:checkbox[name=serie]:checked').each(function () {
      copySeries.push($(this).val());
    });

    setCachedSeries(copySeries);
  };

  const handleCheckPrices = () => {
    let copyPrices = '';
    $('input:radio[name=precio]:checked').each(function () {
      copyPrices = $(this).val();
    });

    setCachedPrices(copyPrices);
  };

  return (
    <aside aria-label='Filtros' className='m-2 mt-md-4 mx-md-3 col-md-3 col-sm-4 col-lg-2'>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}

      <h2 className='text-center border-bottom border-top p-1'>Filtros</h2>
      <div className='border rounded p-2'>
        <div className='list-group'>
          <h5 className='mx-2'>Marca:</h5>
          <div aria-label='Marcas' className='overflow-auto' style={{ maxHeight: '500px' }}>
            {getSeries()
              .map(item => (
                <label key={item} className='list-group-item border-0' lang='en'>
                  <input className='form-check-input me-1' type='checkbox' value={item} name='serie' onChange={handleCheckSeries} />
                  {item}
                </label>
              ))}
          </div>
        </div>

        <hr className='border-3 border-top border-dark' />
        <div className='list-group my-2 '>
          <h6 className='mx-2'>Precio:</h6>
          <label className='list-group-item border-0'>
            <input className='form-check-input me-1' type='radio' name='precio' value='menorVein' onChange={handleCheckPrices} />
            Menor a 20€
          </label>
          <label className='list-group-item border-0'>
            <input className='form-check-input me-1' type='radio' name='precio' value='veinCincuen' onChange={handleCheckPrices} />
            20€ - 50€
          </label>
          <label className='list-group-item border-0'>
            <input className='form-check-input me-1' type='radio' name='precio' value='mayorCincuen' onChange={handleCheckPrices} />
            Mayor a 50€
          </label>
          <label className='list-group-item border-0'>
            <input className='form-check-input me-1' type='radio' name='precio' value='' onChange={handleCheckPrices} checked={cachedPrices === ''} />
            Sin límite de precio
          </label>
        </div>

        <div className='list-group'>
          <input className='float-end btn btn-primary' type='submit' value='Aplicar Filtros' onClick={() => { setSeries(cachedSeries); setPrices(cachedPrices); }} />
        </div>
      </div>

    </aside>
  );
};
