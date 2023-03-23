import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { changeQuantity } from '../data/storage';

const generateOptions = (quantity) => {
  const options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
};

export const FunkoEnCarrito = ({ funko, fixQuantity, remove, updateQuantity }) => {
  const [quantity, setQuantity] = useState(fixQuantity);

  useEffect(() => {
    changeQuantity(funko.handle, quantity);
    updateQuantity();
  }, [quantity]);

  return (
    <div className='row border border-2 d-flex align-items-center' style={{ marginTop: '2%' }}>

      <div className='col'>
        <Link to={`/Funko/${funko.handle}`}> <img src={funko.imageName} width='110' height='145' className='mt-5 mb-5 mx-5' /></Link>
      </div>

      <div className='col'>
        <h4 className='text-center '>{funko.title}</h4>
      </div>

      <span className='col'>
        Cantidad:
        <select
          className='form-select w-50' aria-label='Default select example' onChange={(e) => {
            setQuantity(e.target.value);
          }} value={quantity}
        >
          {generateOptions(10)}

        </select>
      </span>

      <div className='col'>
        <h4 className='text-center'>{funko.price * quantity}€</h4>
      </div>

      <div className='col'>
        <button id='login' className=' btn btn-danger mx-1' onClick={() => { remove(funko); }}>Eliminar Funko</button>
      </div>

    </div>

  );
};

export default FunkoEnCarrito;
