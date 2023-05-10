import { Link } from 'react-router-dom';
import './../../assets/styles/zoom.css';
import { useModal } from '../../components/Modal';
import { useCart } from '../../hooks/useCart';
import { useSession } from '../../hooks/useSession';
import './cartButton.css';
import { useRef } from 'react';

function tituloModificado (tituloOri) {
  let tituloFinal = tituloOri;

  if (tituloOri.length > 22) {
    tituloFinal = tituloOri.slice(0, 22) + '...';
  }

  return tituloFinal;
}

export const FunkoItem = ({ funko }) => {
  const [compraModal, showCompraModal] = useModal({ type: 'compra' });
  const [noAccountModal, showNoAccountModal] = useModal({ type: 'noAccount' });
  const { addToCart } = useCart();
  const { active } = useSession();
  const cartRef = useRef();

  return (
    <>
      {compraModal}
      {noAccountModal}

      <div
        aria-label={`Cuadro del funko ${funko.title}`} className='shadow col-auto border border-2 rounded m-2 d-inline-block p-3 zoom'
      >
        <Link to={`/Funko/${funko.handle}`}> <img
          loading='lazy'
          src={funko.imageName} width='200' height='266' style={{
            'object-fit': 'scale-down'

          }} alt={'Imagen del producto funko llamado' + funko.title} title={funko.title}
                                             />
        </Link>

        <p className='mt-3 fs-5' style={{ maxWidth: '200px' }}>{tituloModificado(funko.title)}</p>

        <div>
          <div className='mb-3'>
            <p aria-label={`Precio del funko ${funko.title}: ${funko.price} €`} className='ms-1'><strong>{funko.price} €</strong></p>
          </div>
          <div className='justify-content-between'>

            <p className='d-inline ms-1 align-middle align-self-center'>{funko.rating}  <i className='bi bi-star-fill' style={{ color: '#000000' }} /></p>
            <div
              aria-label={`Añadir al carrito funko ${funko.title}`}
              className='float-end align-self-center' onClick={() => {
                if (!active) {
                  showNoAccountModal();
                }
              }}
            >
              <button
                ref={cartRef}
                className='cart__button btn btn-success btn-sm float-end text-white' onClick={(e) => {
                  if (!active) {
                    showNoAccountModal();
                  } else {
                    cartRef.current.classList.add('clicked');
                    addToCart(funko, 1);
                    showCompraModal();
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
      </div>
    </>
  );
};

export default FunkoItem;
