import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icono from '../../assets/images/funkoIcono.png';
import { getFunkosData } from '../../data/storage';
import Nav from './Nav';

export const Header = ({ session }) => {
  const [cart, setCart] = useState(false);
  // getFunkosData().length !== 0);

  useEffect(() => {
    setCart(getFunkosData().length !== 0);
  });

  return (
    <>
      <header aria-label='Cabecera'>
        <div className='container-fluid'>
          <div className='center-block row bg-dark p-1'>
            <span className='col-4 d-flex flex-column flex-sm-row my-auto'>
              <Link to='/'><button className='btn btn-light my-2' aria-label='Botón de Inicio'><i className='bi bi-house-door-fill' /></button></Link>
            </span>

            <span className='col-4 text-white d-flex flex-column flex-sm-row justify-content-center my-auto'>
              <Link to='/' className='align-self-center'>
                <img src={icono} className='mx-1 ' height={44} width={44} alt='icono Funkoshop' />
              </Link>
              <Link to='/' className='text-decoration-none align-self-center'>
                <h1 className='text-white'>FunkoShop</h1>
              </Link>
            </span>

            <span className='col-4 d-flex flex-column flex-sm-row align-self-center justify-content-end my-auto'>

              {session
                ? <>
                  <Link to='/Profile'><button id='Perfil' className=' btn btn-light mx-1 my-1'>Perfil</button></Link>
                  <Link to='/Cart'><button id='cart' className='btn btn-light mx-3 my-1'><i className={`bi ${cart ? 'bi-cart' : 'bi-cart-plus-fill'}`} /> Carrito</button></Link>
                  </>
                : <>
                  <Link to='/Login'><button id='login' className=' btn btn-light mx-1 my-1'>Iniciar Sesión</button></Link>
                  <Link to='/SignUp'><button id='signup' className='btn btn-light mx-1 my-1'>Registrarse</button></Link>
                  </>}
            </span>
          </div>
        </div>
        <Nav />
      </header>
    </>
  );
};
export default Header;
