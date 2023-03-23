import { Link } from 'react-router-dom';
import { addFunko } from '../data/storage';
import AddedModal from './addedModal';

export const Funko = (props) => {
  return (
    <>
      <AddedModal alert='Se ha añadido al carrito correctamente' out='Ir al carrito' value='0' />
      <div className=' col-auto border border-2 funko mt-2 mx-2 mb-2 d-inline-block p-3'>

        <Link to={`/Funko/${props.funko.handle}`}> <img src={props.funko.imageName} width='250' height='333' alt='Imagen de Funko' title={props.funko.title} /> </Link>

        <p className='mt-3'>{props.funko.title}</p>

        <div>
          <p className='funko_item_price'><strong>{props.funko.price} €</strong></p>
          <button className='btn btn-primary' id='anadir' onClick={() => { addFunko(props.funko, 1); new bootstrap.Modal(document.getElementById('exampleModal')).show(); }}>Añadir a la cesta</button>
        </div>
      </div>
    </>
  );
};

export default Funko;
