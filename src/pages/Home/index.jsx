import 'bootstrap-icons/font/bootstrap-icons.css';
import { Funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';
import { getSeries, getFunkos } from './../../data';
import { Pagination } from './Pagination';
import { Search } from './Search';

export const Home = ({ itemsPerPage }) => {
  const [pricesPreview, setPricesPreview] = useState('');
  const [prices, setPrices] = useState('');

  const [seriesPreview, setSeriesPreview] = useState([]);
  const [series, setSeries] = useState([]);

  const [search, setSearch] = useState('');
  const [funkoList, setFunkoList] = useState(getFunkos().map(item => <Funko key={item.handle} funko={item} />));
  const items = [];

  const handleCheckSeries = () => {
    const copySeries = [];
    $('input:checkbox[name=serie]:checked').each(function () {
      copySeries.push($(this).val());
    });

    setSeriesPreview(copySeries);
  };

  const handleCheckPrices = () => {
    let copyPrices = '';
    $('input:radio[name=precio]:checked').each(function () {
      copyPrices = $(this).val();
    });

    setPricesPreview(copyPrices);
  };

  getSeries()
    .forEach(item => items.push(
      <label key={item} className='list-group-item border-0'>
        <input className='form-check-input me-1' type='checkbox' value={item} name='serie' onChange={handleCheckSeries} />
        {item}
      </label>
    ));

  const updateSearch = (buscado) => {
    setSearch(buscado);
  };

  useEffect(() => {
    filter();
  }, [series, search, prices]);

  const filter = () => {
    console.log(prices);
    const filtered = getFunkos().filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      .filter(item => series.length === 0 || item.series.some(element => series.includes(element.replace('Pop! ', '').replace('Pops! ', '').replace('POP! ', ''))))
      .filter(item => (prices === '' || (prices === 'menorVein' && item.price < 20) ||
        (prices === 'veinCincuen' && item.price >= 20 && item.price <= 50) ||
        (prices === 'mayorCincuen' && item.price > 50)));

    setFunkoList(filtered.map(element => <Funko key={element.handle} funko={element} />));
  };

  return (
    <>
      <Search updateSearch={updateSearch} />

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
                <input className='form-check-input me-1' type='radio' name='precio' value='' onChange={handleCheckPrices} checked={pricesPreview === ''} />
                Sin límite de precio
              </label>
            </div>

            <div className='list-group'>
              <input className='float-end btn btn-primary' type='submit' value='Aplicar Filtros' onClick={() => { setSeries(seriesPreview); setPrices(pricesPreview); }} />
            </div>
          </div>

        </aside>

        {/* <-- Seccion --> */}
        <section className='col-9 m-4'>
          <h2 className='text-center border-bottom border-top'>Catálogo</h2>
          {search && <p className='fs-5 fw-bold text-left'>Resultados de '{search}'</p>}

          <Pagination itemsPerPage={itemsPerPage} items={funkoList} />

        </section>
      </div>
    </>
  );
};

export default Home;
