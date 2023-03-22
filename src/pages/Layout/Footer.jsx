import spanish from '../../assets/images/Spain.png';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <>
      <footer className='mt-5'>
        <div
          id='footer'
          className='container-fluid bg-dark align-bottom'
        >
          <div className='row p-3'>
            <div className='col-2' id='redes'>
              <div className='row' id='instagram'>
                <div>
                  <a
                    className='link-light text-decoration-none'
                    href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'
                  >
                    <i class='bi bi-instagram' />{' '}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
              <div className='row' id='facebook'>
                <div>
                  <a
                    className='link-light text-decoration-none'
                    href='https://es-es.facebook.com/' target='_blank' rel='noreferrer noopener'
                  >
                    <i class='bi bi-facebook' />{' '}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
              <div className='row' id='twitter'>
                <div>
                  <a
                    className='link-light text-decoration-none'
                    href='https://twitter.com/' target='_blank' rel='noreferrer noopener'
                  >
                    <i class='bi bi-twitter' />{' '}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-8' id='info'>
              <span className='block d-flex justify-content-center m-2'>
                <Link
                  to='/TermsAndConditions'
                  className='text-white text-decoration-none mx-2'
                >
                  Términos y Condiciones
                </Link>
                <Link
                  to='/AboutUs'
                  className='text-white text-decoration-none mx-2'
                >
                  Sobre nosotros
                </Link>
                <Link
                  to='/Contact'
                  className='text-white text-decoration-none mx-2'
                >
                  Contacto
                </Link>
                <a href='https://goo.gl/maps/douTAYgW9ja5h5VN6' className='link-light text-decoration-none mx-2' target='_blank' rel='noreferrer noopener'>
                  Localización
                </a>
                <Link
                  to='/Faq'
                  className='text-white text-decoration-none mx-2'
                >
                  ¿Necesitas Ayuda?
                </Link>
              </span>

              <span className='block d-flex justify-content-center m-2'>
                <p className='text-white justify-content-center'>
                  © 2023 FunkoShopInterfaces
                </p>
              </span>
            </div>

            <div className='col-2 d-flex justify-content-end' id='idioma'>
              <p className='text-white m-4'>
                <img src={spanish} alt='Idioma Español' /> ES
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
