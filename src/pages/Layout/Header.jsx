import { Link } from 'react-router-dom';
import icono from '../../assets/images/funkoIcono.png';
import Nav from './Nav';

export const Header = () => {
  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='center-block row bg-dark p-1'>
            <span className='col-4 d-flex my-auto'>
              <Link to='/'><button class='btn btn-light my-2'><i class='bi bi-house-door-fill' /></button></Link>
            </span>

            <span className='col-4 text-white d-flex justify-content-center my-auto'>
              <Link to='/' className='align-self-center'>
                <img src={icono} className='mx-1 ' height={44} width={44} />
              </Link>
              <Link to='/' className='text-decoration-none align-self-center'>
                <h1 className='text-white'>FunkoShop</h1>
              </Link>
            </span>

            <span className='col-4 d-flex align-self-center justify-content-end my-auto'>
              <Link to='/Login'><button id='login' class=' btn btn-light mx-1'>Iniciar Sesión</button></Link>
              <Link to='/SignUp'><button id='signup' class='btn btn-light mx-1'>Registrarse</button></Link>
              <Link to='/Cart'><button id='cart' class='btn btn-light mx-3'><i class='bi bi-cart' />Carrito</button></Link>
            </span>
          </div>
        </div>
        <Nav />
      </header>
    </>
  );
};
export default Header;
