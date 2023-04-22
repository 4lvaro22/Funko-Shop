import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { Filters } from './Filters';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { useFunko } from '../../hooks/useFunko';

export const Home = ({ session, itemsPerPage }) => {
  const [prices, setPrices] = useState('');
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');

  const [funkoList, updateFunkoList] = useFunko({
    filter: (item) => {
      return item.title.toLowerCase().includes(search.toLowerCase()) &&
          (series.length === 0 || item.series.some(element => series.includes(element.replace('Pop! ', '').replace('Pops! ', '').replace('POP! ', '')))) &&
          (prices === '' || (prices === 'menorVein' && item.price < 20) ||
            (prices === 'veinCincuen' && item.price >= 20 && item.price <= 50) ||
            (prices === 'mayorCincuen' && item.price > 50));
    },
    session
  });

  useEffect(() => {
    updateFunkoList();
  }, [series, search, prices]);

  return (
    <>
      <Search updateSearch={setSearch} />
      <h5 className={'text-center text-danger my-1 ' + (!session ? '' : 'invisible')}>¡¡ Para poder comprar un artículo necesitas registrarte !!</h5>

      <div className='d-flex flex-column flex-sm-row align mx-auto'>
        {/* <-- Lado --> */}

        {/* ADD FILTROS */}
        <Filters setPrices={setPrices} setSeries={setSeries} />

        {/* <-- Seccion --> */}
        <section className='m-2 mt-md-4 mx-md-2'>
          <h2 className='text-center border-bottom border-top p-1'>Catálogo</h2>
          {search && <p className='fs-5 fw-bold text-left'>Resultados de '{search}'</p>}

          <Pagination itemsPerPage={itemsPerPage} items={funkoList} />

        </section>
      </div>
    </>
  );
};

export default Home;
