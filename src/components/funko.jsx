import { Link } from 'react-router-dom';

export const Funko = (props) => {
  console.log(props);

  return (

    <div className='border border-2 funko mt-2 mx-2 mb-2 d-inline-block p-3'>

      <Link to={`/Funko/${props.funko.handle}`}> <img src={props.funko.imageName} width='250' height='333' alt='Imagen de Funko' title={props.funko.title} /> </Link>

      <p className='mt-3'>{props.funko.title}</p>

      <div>
        <p className='funko_item_price'><strong>{props.funko.price} €</strong></p>
        <Link to='/Funko'> <button id='anadir'>Añadir a la cesta</button> </Link>
      </div>
    </div>
  );
};

export default Funko;
