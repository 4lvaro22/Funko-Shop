import { Link } from 'react-router-dom';
import { addFunko } from '../../data/storage';
import AddedModal from '../../components/addedModal';
import { useModal } from '../../components/Modal';

function tituloModificado (tituloOri) {
  let tituloFinal = tituloOri;

  if (tituloOri.length > 22) {
    tituloFinal = tituloOri.slice(0, 22) + '...';
  }

  return tituloFinal;
}

export const FunkoItem = ({ funko, session }) => {
  const [compraModal, showCompraModal] = useModal({ type: 'compra' });
  const [noAccountModal, showNoAccountModal] = useModal({ type: 'noAccount' });
  return (
    <>
      {compraModal}
      {noAccountModal}
      {/* <AddedModal id={funko.handle + 'Modal'} alert='Se ha añadido al carrito correctamente.' out='Ir al carrito' value='0' /> */}
      {/* <AddedModal id='noAccountModal' alert='Para realizar esta acción necesitas tener iniciada sesión.' out='Registrarse' value='2' /> */}
      <div
        aria-label={`Cuadro del funko ${funko.title}`} className='shadow col-auto border border-2 rounded m-2 d-inline-block p-3 '
      >

        <Link to={`/Funko/${funko.handle}`}> <img
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
          <div>

            <p className='d-inline ms-1 align-middle'>{funko.rating}  <i className='bi bi-star-fill' style={{ color: '#000000' }} /></p>
            <div
              aria-label={`Añadir al carrito funko ${funko.title}`}
              className='float-end' onClick={() => {
                if (!session) {
                  showNoAccountModal();
                  // new bootstrap.Modal(document.getElementById('noAccountModal')).show();
                }
              }}
            >
              <button
                className='btn btn-success btn-sm float-end text-white' onClick={() => {
                  if (!session) {
                    showNoAccountModal();
                    // new bootstrap.Modal(document.getElementById('noAccountModal')).show();
                  } else {
                    addFunko(funko, 1);
                    showCompraModal();
                    // new bootstrap.Modal(document.getElementById(funko.handle + 'Modal')).show();
                  }
                }}
              >Añadir a la cesta
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FunkoItem;
