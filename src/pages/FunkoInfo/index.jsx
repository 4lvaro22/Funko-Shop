import { useParams } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { getFunkoById } from '../../data';
import Reviews from './Review';
import { useModal } from '../../components/Modal';
import { useCart } from '../../hooks/useCart';
import { useSession } from '../../hooks/useSession';
import './../Home/cartButton.css';
// import bootstrap from 'bootstrap';

const generateOptions = (quantity) => {
  const options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
};

export const FunkoInfo = () => {
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
  const { addToCart } = useCart();
  const { active } = useSession();
  const cartRef = useRef();

  useEffect(() => {
    if (!id) return;

    setFunko(getFunkoById(id));
  }, [id]);

  useEffect(() => {
    document.title = `Funko ${funko.title} | FunkoShop`;
  }, [funko]);

  return (
    <>

      <div className='container mb-5'>
        {carritoModal}
        {noAccountModal}

        <div className='row my-3'>

          <div className='col'>

            <img
              src={funko.imageName} alt={funko.title} width='300' height='400' style={{
                marginLeft: '15%',
                marginTop: '15%',
                objectFit: 'scale-down'
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

              <p className='mt-5 fs-4' style={{}}>Precio: {funko.price} €</p>

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
                ref={cartRef}
                className='cart__button btn btn-success m-1' onClick={(e) => {
                  if (!active) {
                    showNoAccountModal();
                  } else {
                    addToCart(funko, Number(quantity));
                    cartRef.current.classList.add('clicked');
                    showCarritoModal();
                    setTimeout(() => {
                      cartRef.current.classList.remove('clicked');
                    }, 3000);
                  }
                }}
              >
                <span className='add__to-cart'>Añadir a la cesta</span>
                <span className='added'>Añadido</span>
                <i class='bi bi-cart' />
                <i class='bi bi-box' />
                {/* Añadir a la cesta */}
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
