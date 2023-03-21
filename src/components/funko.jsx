import { Link } from 'react-router-dom';

export const Funko = (props) => {
  return (
    <div className='funko mt-4 mx-4 mb-4'>

      <Link to='/Funko'> <img src={props.funko.imageName} width='250' height='333' alt='Imagen de Funko' title={props.funko.title} /> </Link>

      <p className='mt-3'>{props.funko.title}</p>

      <div>
        <p className='funko_item_price'><strong>{props.funko.price} €</strong></p>
        <Link to='/Funko'> <button id='anadir'>Añadir a la cesta</button> </Link>
      </div>
    </div>
  );
};

export default Funko;
