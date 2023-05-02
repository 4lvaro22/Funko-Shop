import grupoPersonas from '../../assets/images/grupoPersonas.jpg';
import { LoremIpsum } from './LoremIpsum';
import { useEffect } from 'react';

export const AboutUs = () => {
  useEffect(() => {
    document.title = 'Acerca de Nosotros | FunkoShop';
  }, []);
  return (
    <div>
      <h1 className='text-center'>
        <strong>FunkoShop</strong>
        <small className='text-muted mx-3'>Grupo-H</small>
      </h1>
      <img src={grupoPersonas} alt='Foto de nuestro equipo' className='float-start me-auto' width='50%' />
      <LoremIpsum />
    </div>
  );
};

export default AboutUs;
