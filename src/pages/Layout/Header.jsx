import { Link } from 'react-router-dom';
import icono from '../../assets/images/funkoIcono.png';
import Nav from './Nav';
import { useCart } from '../../hooks/useCart';
import { useSession } from '../../hooks/useSession';

export const Header = () => {
  const { active } = useSession();
  const { cart } = useCart();

  return (
    <>
      <header aria-label='Cabecera'>
        <div className='container-fluid'>
          <div className='center-block row bg-dark p-1'>
            <span className='col-4 d-flex flex-column flex-sm-row my-auto'>
              <Link to='/' aria-label='Botón de Inicio' tabIndex={-1}><button className='btn btn-light my-2' aria-label='Botón de Inicio'><i className='bi bi-house-door-fill' /></button></Link>
            </span>

            <span className='col-4 text-white d-none d-md-flex flex-row flex-sm-row justify-content-center my-auto'>
              <Link to='/' className='d-flex flex-row justify-content-center text-decoration-none' tabIndex={-1}>

                <div className='align-self-center'>

                  <img src={icono} className='mx-1 ' height={44} width={44} alt='icono Funkoshop' />
                </div>
                <div className='align-self-center'>
                  <h1 className='text-white'>FunkoShop</h1>
                </div>
              </Link>
            </span>

            <span className='col-8 col-md-4 d-flex flex-row align-self-center justify-content-end my-auto'>

              {active
                ? <>
                  <Link to='/Profile' aria-label='Botón perfil' tabIndex={-1}><button id='Perfil' className=' btn btn-light mx-1 my-1'>Perfil</button></Link>
                  <Link to='/Cart' aria-label='Botón de Carrito' tabIndex={-1}><button id='cart' className='btn btn-light mx-3 my-1'><i className={`bi ${cart?.length !== 0 ? 'bi-cart-plus-fill' : 'bi-cart'}`} /> Carrito</button></Link>
                  </>
                : <>
                  <Link to='/Login' tabIndex={-1}><button id='login' className=' btn btn-light mx-1 my-1'>Iniciar Sesión</button></Link>
                  <Link to='/SignUp' tabIndex={-1}><button id='signup' className='btn btn-light mx-1 my-1'>Registrarse</button></Link>
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
