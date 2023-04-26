import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { changeQuantity } from '../../data/storage';

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
    <div className='row border border-2 mt-2 p-2 d-flex align-items-center align-content-center flex-wrap'>

      <div className='col-6 col-sm-6 col-md-3 col-lg-2' aria-label='Imagen funko'>
        <Link to={`/Funko/${funko.handle}`}> <img src={funko.imageName} alt={funko.title} width='110' height='145' className='mt-4 mb-4 mx-5' /></Link>
      </div>

      <div className='col-6 col-sm-6 col-md-2 col-lg-2' aria-label='Nombre funko'>
        <h4 className='text-center '>{funko.title}</h4>
      </div>

      <span className='col col-md-3 col-lg-3 item-align-center mb-2 mb-0-sm ' aria-label='Seleccionar Cantidad'>
        <label htmlFor='selectQuantity'>Cantidad:</label>
        <select
          className='form-select w-50 float-sm-end float-md-none' id='selectQuantity' aria-label='Default select example' onChange={(e) => {
            setQuantity(e.target.value);
          }} value={quantity}
        >
          {generateOptions(10)}

        </select>
      </span>

      <div className='col col-md-1 col-lg-2'>
        <h4 className='text-center '>{funko.price * quantity}€</h4>
      </div>

      <div className='col col-md-1 col-lg-3' aria-label='Boton eliminar funko'>
        <button id='remove' className=' btn btn-danger mx-1' onClick={() => { remove(funko); }}>Eliminar</button>
      </div>

    </div>

  );
};

export default FunkoEnCarrito;
