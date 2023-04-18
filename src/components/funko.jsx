import { Link } from 'react-router-dom';
import { addFunko } from '../data/storage';
import AddedModal from './addedModal';

function tituloModificado (tituloOri) {
  let tituloFinal = tituloOri;

  if (tituloOri.length > 22) {
    tituloFinal = tituloOri.slice(0, 22) + '...';
  }

  return tituloFinal;
}

export const Funko = ({ funko }) => {
  return (
    <>
      <AddedModal id={funko.handle + 'Modal'} alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
      <div
        className='shadow col-auto border border-2 rounded m-2 d-inline-block p-3 '
      >

        <Link to={`/Funko/${funko.handle}`}> <img src={funko.imageName} width='200' height='266' alt='Imagen de Funko' title={funko.title} /> </Link>

        <h4 className='mt-3 fs-6' style={{ maxWidth: '200px' }}>{tituloModificado(funko.title)}</h4>

        <div>
          <div className='mb-3'>
            <p className='ms-1'><strong>{funko.price} €</strong></p>
          </div>
          <div>

            <p className='d-inline ms-1 align-middle'>{funko.rating}  <i className='bi bi-star-fill text-warning' /></p>
            <button
              id='anadir' className='btn btn-success btn-sm float-end' onClick={() => {
                addFunko(funko, 1);
                new bootstrap.Modal(document.getElementById(funko.handle + 'Modal')).show();
              }}
            >Añadir a la cesta
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Funko;
