import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replace('/', ' > ').replaceAll('/', ': ');
  const path = currentPath === ' > ' ? '' : currentPath.replace('Login', 'Iniciar Sesión').replace('SignUp', 'Registrarse').replace('Cart', 'Carrito').replace('AboutUs', 'Sobre Nosotros').replace('Contact', 'Contacto').replace('Faq', 'Preguntas Frecuentes').replace('TermsAndConditions', 'Términos y Condiciones').toUpperCase('es-ES');

  const validateNav = () => {
    return currentPath.length > 3;
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-2'>
        <p className='text-dark'><h6 className={(validateNav() ? '' : 'visually-hidden')}><a className='text-decoration-none text-dark' href='http://127.0.0.1:5173/Proyecto-Interfaces-Grupo-H/#/'>INICIO</a>{path}</h6></p>
      </nav>
    </>
  );
};

export default Nav;
