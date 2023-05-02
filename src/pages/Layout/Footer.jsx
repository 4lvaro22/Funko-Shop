import spanish from '../../assets/images/Spain.png';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <>
      <footer aria-label='Pie de página' className='bg-dark pt-3' style={{ bottom: '0', marginTop: 'auto', position: 'relative', padding: '3rem', fontSize: '105%' }}>
        <div className=' d-flex flex-column flex-sm-row container-fluid justify-content-evenly'>
          <div aria-label='Redes sociales' className='mt-3 mx-4 ' id='redes'>
            <div aria-label='Instagram' id='instagram'>
              <a
                className='link-light text-decoration-none'
                href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'
              >
                <i className='bi bi-instagram' />{' '}
                <strong>FunkoShopInterfaces</strong>
              </a>
            </div>

            <div aria-label='Facebook' id='facebook'>
              <a
                className='link-light text-decoration-none'
                href='https://es-es.facebook.com/' target='_blank' rel='noreferrer noopener'
              >
                <i className='bi bi-facebook' />{' '}
                <strong>FunkoShopInterfaces</strong>
              </a>
            </div>

            <div aria-label='Twitter' id='twitter'>
              <a
                className='link-light text-decoration-none'
                href='https://twitter.com/' target='_blank' rel='noreferrer noopener'
              >
                <i className='bi bi-twitter' />{' '}
                <strong>FunkoShopInterfaces</strong>
              </a>
            </div>
          </div>

          <div aria-label='Información sobre nosotros' className='d-flex flex-column mt-3 mx-2' id='info'>
            <span className='block d-flex flex-column flex-md-row justify-content-center m-2'>
              <Link
                to='/TermsAndConditions'
                className='text-white text-decoration-none mx-2 my-1'
              >
                Términos y Condiciones{' '}
              </Link>
              <Link
                to='/AboutUs'
                className='text-white text-decoration-none mx-2 my-1'
              >
                Sobre nosotros
              </Link>
              <Link
                to='/Contact'
                className='text-white text-decoration-none mx-2 my-1'
              >
                Contacto
              </Link>
              <a href='https://goo.gl/maps/douTAYgW9ja5h5VN6' className='link-light text-decoration-none mx-2 my-1' target='_blank' rel='noreferrer noopener'>
                Localización
              </a>
              <Link
                to='/Faq'
                className='text-white text-decoration-none mx-2 my-1'
              >
                ¿Necesitas Ayuda?
              </Link>
            </span>

          </div>

          <div aria-label='Idioma español' className='d-flex flex-column flex-sm-row justify-content-end mx-2' id='idioma'>
            <p className='text-white m-3'>
              <img src={spanish} alt='Idioma Español' width={30} height={30} /> ES
            </p>
          </div>
        </div>
        <div className='d-flex flex-sm-row justify-content-center'>
          <span className='my-2'>
            <p className='text-white justify-content-center'>
              © 2023 FunkoShopInterfaces
            </p>
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
