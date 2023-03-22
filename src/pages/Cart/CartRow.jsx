import { Link } from 'react-router-dom';

export const CartRow = ({ itemFunko, quantity }) => {
  return (
    <div className=' row border border-2 d-flex align-items-center' style={{ marginTop: '5%' }}>

      <div className='col'>

        <Link to={`/FunkoInfo/${itemFunko.handle}`}> <img src={itemFunko.imageName} width='150' height='200' className='mt-5 mb-5 mx-5' /></Link>
      </div>

      <div className='col'>
        <h4 className='text-center '>{itemFunko.title}</h4>
      </div>

      <div className='col'>
        <div className='dropdown p-1 text-center'>
          <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Editar Cantidad {quantity}
          </button>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href='#'>1</a></li>
            <li><a className='dropdown-item' href='#'>2</a></li>
            <li><a className='dropdown-item' href='#'>3</a></li>
            <li><a className='dropdown-item' href='#'>4</a></li>
            <li><a className='dropdown-item' href='#'>5</a></li>
            <li><a className='dropdown-item' href='#'>6</a></li>
            <li><a className='dropdown-item' href='#'>7</a></li>
            <li><a className='dropdown-item' href='#'>8</a></li>
            <li><a className='dropdown-item' href='#'>9</a></li>
          </ul>
        </div>

      </div>

      <div className='col'>
        <h4 className='text-center'>{itemFunko.price}€</h4>
      </div>

      <div className='col'>
        <button id='login' class=' btn btn-danger mx-1'>Eliminar Funko</button>
      </div>

    </div>
  );
};

export default CartRow;
