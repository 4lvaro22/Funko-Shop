import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { Filters } from './Filters';
import { Pagination } from './Pagination';
import { FunkoItem } from './FunkoItem';
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

  useEffect(() => {
    document.title = 'Catálogo | FunkoShop';
  }, []);

  return (
    <>
      <Search id='buscador' updateSearch={setSearch} />

      <div aria-label='Filtros y catálogo' className='d-flex flex-column flex-sm-row align mx-auto'>

        {/* <-- Lado --> */}
        <Filters setPrices={setPrices} setSeries={setSeries} />

        {/* <-- Seccion --> */}
        <section aria-label='Catálogo' className='m-2 mt-md-4 mx-md-2 flex-fill'>
          <h2 className='text-center border-bottom border-top p-1'>Catálogo</h2>
          {search && <p className='fs-5 fw-bold text-left'>Resultados de '{search}'</p>}

          <Pagination itemsPerPage={itemsPerPage} items={funkoList.map(item => <FunkoItem key={item.handle} funko={item} session={session} />)} />

        </section>
      </div>
    </>
  );
};

export default Home;
