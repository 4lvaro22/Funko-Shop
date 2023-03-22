import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icono from '../../assets/images/funkoIcono.png';
import { getFunkosData } from '../../data/storage';

export const Header = () => {
  const [cart, setCart] = useState(false);
  // getFunkosData().length !== 0);

  useEffect(() => {
    setCart(getFunkosData().length !== 0);
  });

  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='center-block row bg-dark'>
            <span className='col-4 d-flex align-self-center'>
              <Link to='/'><button className='btn btn-light my-2'><i className='bi bi-house-door-fill' /></button></Link>
            </span>

            <span className='col-4 text-white row d-flex justify-content-center my-1'>
              <img src={icono} className='col-2 img-fluid mx-2 mt-1' />
              <h1 className='col-5 mt-1'>FunkoShop</h1>
            </span>

            <span className='col-4 d-flex align-self-center justify-content-end'>
              <Link to='/Login'><button id='login' className=' btn btn-light mx-1'>Iniciar Sesión</button></Link>
              <Link to='/SignUp'><button id='signup' className='btn btn-light mx-1'>Registrarse</button></Link>
              <Link to='/Cart'><button id='cart' className='btn btn-light mx-3'><i className={`bi ${!cart ? 'bi-cart' : 'bi-cart-plus-fill'}`} /> Carrito</button></Link>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
