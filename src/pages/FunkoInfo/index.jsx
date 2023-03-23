import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFunkoById } from '../../data';
import { addFunko } from '../../data/storage';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import IndividualReview from './IndividualReview';
import AddedModal from '../../components/addedModal';

// import bootstrap from 'bootstrap';

const generateOptions = (quantity) => {
  const options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
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
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    setFunko(getFunkoById(id));
  }, [id]);

  return (
    <>

      <div className='container mb-5'>

        <AddedModal alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
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
                <li><strong>Valoracion:</strong> {funko.rating} <i className='bi bi-star-fill' /></li>
              </ul>

              <h4 className='mt-5' style={{}}>Precio: {funko.price} €</h4>

            </div>

            <div className='col-2'>
              <select
                className='form-select' aria-label='Default select example' onChange={(e) => {
                  setQuantity(e.target.value);
                }} value={quantity}
              >
                {generateOptions(10)}

              </select>
            </div>

            <div className='p-2'>
              <button
                className=' btn btn-dark m-1' id='añadirCesta' onClick={() => {
                  addFunko(funko, quantity);
                  new bootstrap.Modal(document.getElementById('exampleModal')).show();
                }}
              >Añadir a la cesta
              </button>
            </div>
          </div>
        </div>

        <div className='text-center mt-5'>
          <h2 className='text-h5 px-4 d-inline white'>
            <hr role='separator' aria-orientation='horizontal' className='my-5 v-divider theme--light' />
            <u>Opiniones sobre Funko {funko.title}</u>
          </h2>
          <div className='my-4'>
            <h4>Puntuación</h4>
            <Stars oldRating={parseInt(funko.rating)} />
          </div>

          <h1><strong>{funko.rating}/5</strong></h1>
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
