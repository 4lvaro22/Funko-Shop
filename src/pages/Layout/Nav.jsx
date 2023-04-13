import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replaceAll('/', ' > ');
  const path = currentPath === ' > ' ? '' : 'Home'.concat(currentPath).replace('Home', 'Inicio').replace('Login', 'Iniciar Sesión').replace('SignUp', 'Registrarse').replace('Cart', 'Carrito').replace('AboutUs', 'Sobre Nosotros').replace('Contact', 'Contacto').replace('Faq', 'Preguntas Frecuentes').replace('TermsAndConditions', 'Términos y Condiciones').toUpperCase('es-ES');

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light p-2'>
        <p className='text-dark'><h6>{path}</h6></p>
      </nav>
    </>
  );
};

export default Nav;
