import { useLocation, Link } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replace('/', ' > ').replaceAll('/', ': ');
  const path = currentPath === ' > ' ? '' : currentPath.replace('Login', 'Iniciar Sesión').replace('SignUp', 'Registrarse').replace('Cart', 'Carrito').replace('AboutUs', 'Sobre Nosotros').replace('Contact', 'Contacto').replace('Faq', 'Preguntas Frecuentes').replace('TermsAndConditions', 'Términos y Condiciones').toUpperCase('es-ES');

  const validateNav = () => {
    return currentPath.length > 1;
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light p-2'>
        <h6 className={'text-dark' + (validateNav() ? '' : 'visually-hidden')}><Link to='/' className='text-decoration-none text-dark'>INICIO</Link>{path}</h6>
      </nav>
    </>
  );
};

export default Nav;
