import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFunkoById } from '../../data';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import IndividualReview from './IndividualReview';

const addFunko = (funko) => {
  const storedValue = localStorage.getItem('funko');
  const value = storedValue === null || storedValue === undefined ? [] : JSON.parse(storedValue);

  let found = value.find((element) => element.id === funko.handle);

  if (found) {
    found.quantity = found.quantity + 1;
  } else {
    found = {
      id: funko.handle,
      quantity: 1
    };
    value.push(found);
  }

  localStorage.setItem('funko', JSON.stringify(value));
};


export const FunkoInfo = (props) => {
  const [funko, setFunko] = useState(
    {
      imageName: '',
      title: '',
      scale: '',
      price: '',
      rating: '',
      series: [],
      released: {
        year: '',
        month: ''
      }
    }
  );
  const { id } = useParams();

  useEffect(() => {
    setFunko(getFunkoById(id));
  }, id);

  console.log(funko);

  return (

    <>

      <div className='container mb-5'>

        <div className='row my-3'>

          <div className='col'>

            {/*  */}
            <img src={funko.imageName} width='300' height='400' style={{ marginLeft: '15%', marginTop: '15%' }} />
          </div>

          <div className='col d-grid gap-3'>

            <h1 className='p-1 mt-5'>{funko.title}</h1>

            <div className='p-1'>
              <ul>
                <li><strong>Series:</strong> {funko.series.join(', ')}</li>
                <li><strong>Escala:</strong>  {funko.scale}</li>
                <li><strong>Fecha de lanzamiento:</strong>  {funko.released.year}</li>
                <li><strong>Valoracion:</strong> {funko.rating} <i class='bi bi-star-fill' /></li>
              </ul>

              <h4 className='mt-5' style={{}}>Precio: {funko.price} €</h4>

            </div>

            <div className='dropdown p-1'>
              Seleccionar cantidad: &nbsp;
              <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Cantidad
              </button>
              <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#'>1</a></li>
                <li><a className='dropdown-item' href='#'>2</a></li>
                <li><a className='dropdown-item' href='#'>3</a></li>
                <li><a className='dropdown-item' href='#'>4</a></li>
                <li><a className='dropdown-item' href='#'>5</a></li>
                <li><a className='dropdown-item' href='#'>6</a></li>
                <li><a className='dropdown-item' href='#'>7</a></li>
                <li><a className='dropdown-item' href='#'>8</a></li>
                <li><a className='dropdown-item' href='#'>9</a></li>
              </ul>
            </div>

            <div className='p-2'>
              <button class=' btn btn-dark m-1' id='añadirCesta' onClick={() => { addFunko(funko); }}>Añadir a la cesta</button>
            </div>
          </div>
        </div>

        <div class='text-center mt-5'>
          <h2 class='text-h5 px-4 d-inline white'>
            <hr role='separator' aria-orientation='horizontal' class='my-5 v-divider theme--light' />
            <u>Opiniones sobre Funko {funko.title}</u>
          </h2>
          <div className='my-4'>
            <h4>Puntuación</h4>
            <Stars />
          </div>

          <h1><strong>3/5</strong></h1>
        </div>

        <div className='row my-5 border p-3'>
          <div className='row my-3'>
            <span className='text-center col-2'>
              <h4><label htmlFor='titulo'>Título:</label></h4>
            </span>
            <span className='w-75 mx-2'>
              <input type='text' className='form-control w-25 mx-2 col-1' id='titulo' />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-center col-2'>
              <h4><label htmlFor='opinion'>Escribe tu opinión:</label></h4>
            </span>
            <span className='w-75 mx-2'>
              <textarea type='text' className='form-control w-25 col-1' id='opinion' />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-center col-2'>
              <h4><label htmlFor='opinion'>Puntuación</label></h4>
            </span>
            <span className='col-lg-2 text-center'>
              <Stars />
            </span>
          </div>
          <div className='row'>
            <span className='col-4 d-flex justify-content-center'>
              <button className='btn btn-primary'>Enviar</button>
            </span>
          </div>
        </div>

        <div className='row my-5 p-3'>
          <IndividualReview />
        </div>
      </div>

    </>

  );
};
export default FunkoInfo;
