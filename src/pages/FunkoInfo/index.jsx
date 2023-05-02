import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { getFunkoById } from '../../data';
import { addFunko } from '../../data/storage';
import AddedModal from '../../components/addedModal';
import Reviews from './Review';
import { useModal } from '../../components/Modal';

// import bootstrap from 'bootstrap';

const generateOptions = (quantity) => {
  const options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
};

export const FunkoInfo = ({ session }) => {
  const navigate = useNavigate();
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
  const [carritoModal, showCarritoModal] = useModal({ type: 'compra' });
  const [noAccountModal, showNoAccountModal] = useModal({ type: 'noAccount' });

  useEffect(() => {
    if (!id) return;

    setFunko(getFunkoById(id));
  }, [id]);

  return (
    <>

      <div className='container mb-5'>
        {carritoModal}
        {noAccountModal}

        {/* <AddedModal alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
        <AddedModal id='noAccountModal' alert='Para realizar esta acción necesitas tener cuenta.' out='Registrarse' value='2' /> */}
        <div className='row my-3'>

          <div className='col'>

            <img
              src={funko.imageName} alt={funko.title} width='300' height='400' style={{
                marginLeft: '15%',
                marginTop: '15%',
                'object-fit': 'scale-down'
              }}
            />
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

              <label htmlFor='cantidad'>Cantidad:</label>

              <select
                id='cantidad'
                className='form-select' aria-label='Default select example' onChange={(e) => {
                  setQuantity(e.target.value);
                }} value={quantity}
              >
                {generateOptions(10)}

              </select>
            </div>

            <div className='p-2'>
              <button
                type='button'
                tabIndex='0'
                aria-label='Añadir a la cesta'
                className='btn btn-success m-1' id='añadirCesta'
                onKeyDown={(e) => {
                  if (session) {
                    if (e.key === 'Enter') { addFunko(funko, quantity); showCarritoModal(); }
                  } else {
                    showNoAccountModal();
                  }
                }}
                onClick={() => {
                  if (session) {
                    addFunko(funko, quantity);
                    showCarritoModal();
                    // new bootstrap.Modal(document.getElementById('exampleModal')).show();}
                  } else {
                    showNoAccountModal();
                  }
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
