import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFunkoById } from '../../data';
import { addFunko } from '../../data/storage';
import AddedModal from '../../components/addedModal';
import Reviews from './Review';

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
      handle: '',
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
    if (!id) return;

    setFunko(getFunkoById(id));
  }, [id]);

  return (
    <>

      <div className='container mb-5'>

        <AddedModal alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
        <div className='row my-3'>

          <div className='col'>

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

              Cantidad:

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

        {funko.handle.length && <Reviews funko={funko} />}

      </div>

    </>

  );
};
export default FunkoInfo;
