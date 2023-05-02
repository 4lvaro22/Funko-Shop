import { useLocation, Link } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(0).replace('/', '  ').replaceAll('/', ': ');
  const path = currentPath === '  '
    ? ''
    : currentPath.replace('Login', 'Iniciar Sesión').replace('SignUp', 'Registrarse').replace('Cart', 'Carrito').replace('AboutUs', 'Sobre Nosotros').replace('Contact', 'Contacto').replace('Faq', 'Preguntas Frecuentes').replace('TermsAndConditions', 'Términos y Condiciones')
      .replace('Profile', 'Perfil').toUpperCase('es-ES');

  const validateNav = () => {
    return currentPath.length > 1;
  };

  return (
    <>
      <nav aria-label='breadcrumb' className='navbar navbar-expand-lg navbar-light p-2'>
        <ol className='breadcrumb'>
          {path &&
            (<>
              <li className='breadcrumb-item'><Link to='/' aria-label='Página de inicio' className='text-decoration-none text-dark fw-bold'>INICIO</Link></li>
              <li className='breadcrumb-item active fw-bold' aria-current='page'><Link to='#' disabled className='text-decoration-none text-dark fw-bold'>{path}</Link></li>
            </>)}
          {!path &&
            <li className='breadcrumb-item active' aria-current='page'><Link to='/' aria-label='Página de inicio' className='text-decoration-none text-dark fw-bold'>INICIO</Link></li>}
        </ol>
      </nav>
    </>
  );
};

export default Nav;
