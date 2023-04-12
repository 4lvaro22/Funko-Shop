import { Link } from 'react-router-dom';
import { addFunko } from '../data/storage';
import AddedModal from './addedModal';

export const Funko = ({ funko }) => {
  return (
    <>
      <AddedModal alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
      <div
        className='shadow col-auto border border-2 rounded m-2 d-inline-block p-3 '
      >

        <Link to={`/Funko/${funko.handle}`}> <img src={funko.imageName} width='215' height='286' alt='Imagen de Funko' title={funko.title} /> </Link>

        <h4 className='mt-3' style={{ 'max-width': '215px' }}>{funko.title}</h4>

        <div>
          <div className='mb-3'>
            <p className='ms-1'><strong>{funko.price} €</strong></p>
          </div>
          <div>

            <p className='d-inline ms-1 align-middle'>{funko.rating}  <i className='bi bi-star-fill text-warning' /></p>
            <button id='anadir' className='btn btn-success btn-sm float-end' onClick={() => { addFunko(funko, 1); }}>Añadir a la cesta</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Funko;
